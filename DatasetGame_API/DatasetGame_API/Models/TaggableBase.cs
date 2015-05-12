using DatasetGame_API.Controllers;
using MongoDB.Bson;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DatasetGame_API.Models
{
    public abstract class TaggableBase
    {
        public ObjectId Id { get; set; }
        public string Path { get; set; }
        public IDictionary<string, string> Tags { get; set; }
    }
}