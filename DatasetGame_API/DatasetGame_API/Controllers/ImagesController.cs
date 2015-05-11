using DatasetGame_API.Extensions;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace DatasetGame_API.Controllers
{
    public class ImagesController : ApiController
    {
        private string _DirectoryPath = HttpContext.Current.Server.MapPath("~/App_Data/Images");

        public HttpResponseMessage GetPictureById(string id)
        {
            if (id.ToLower() == "random")
                id = GetRandomImageId();

            var file = GetFile(id);
            if (file == null)
                return new HttpResponseMessage(System.Net.HttpStatusCode.NotFound);

            var content = HttpResponseExtensions.CreateFileContent(file);
            return new HttpResponseMessage(System.Net.HttpStatusCode.OK)
            {
                Content = content
            };
            
        }

        private FileStream GetFile(string id)
        {
            if (!File.Exists(id))
                return null;

            return new FileStream(id, FileMode.Open);
        }
     
        private string GetRandomImageId()
        {
            var files = Directory.GetFiles(_DirectoryPath);
            var rnd = new Random();

            return files[rnd.Next(files.Length)];
        }
    }
}