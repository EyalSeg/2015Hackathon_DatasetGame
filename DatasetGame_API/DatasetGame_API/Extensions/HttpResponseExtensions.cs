using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Web;

namespace DatasetGame_API.Extensions
{
    public static class HttpResponseExtensions
    {
        public static HttpContent CreateFileContent(FileStream file)
        {
            var content = new StreamContent(file);

            content = new StreamContent(file);
            var mimeType = MimeTypes.GetTypeForExtension(file.Name);
            content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue(mimeType);

            return content;
        }
    }
}