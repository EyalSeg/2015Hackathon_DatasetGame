using DatasetGame_API.Models;
using MongoDB.Bson;
using MongoDB.Bson.IO;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DatasetGame_API.Controllers
{
    public class BasicTaggingController : ApiController
    {
        public const string c_TagPkgFormat = "{ 'id' : {0}, 'path' : '{1}' }";
        public const string c_MongoDBConnectionString = "mongodb://Anaf5:Aa123456@ds041758.mongolab.com:41758/gal";
        public const string c_DbName = "gal";
        public const string c_CollectionName = "Tagging";

        [HttpGet]
        public JToken GetTaggable<T>() where T : TaggableBase, new()
        {
            T taggable = new T();

            JToken json = JObject.Parse(string.Format(c_TagPkgFormat, taggable.Id, taggable.Path));

            return json;
        }

        [HttpPost]
        public HttpResponseMessage SubmitTag()
        {
            JObject jsonContent = JObject.Parse(Request.Content.ReadAsStringAsync().Result);

            MongoClient client = new MongoClient(c_MongoDBConnectionString);
            var db = client.GetDatabase(c_DbName);
            var collection = db.GetCollection<BsonDocument>(c_CollectionName);

            BsonDocument document = BsonSerializer.Deserialize<BsonDocument>(jsonContent.ToString());
            collection.InsertOneAsync(document);

            //var ImgPath = document.GetElement("Path");
            //var filter = Builders<BsonDocument>.Filter.Eq("Path", ImgPath.Value);
            //var result = collection.Find(filter).ToListAsync().Result;

            //if (result.Count == 0)
            //{
            //    collection.InsertOneAsync(document);
            //}
            //else
            //{
            //    collection.UpdateOneAsync(filter, document);
            //}

            // ReturnScore();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}
