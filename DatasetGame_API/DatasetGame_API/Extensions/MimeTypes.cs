using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace DatasetGame_API.Extensions
{
    public static class MimeTypes
    {
        private static Dictionary<string, string> mExtensionsToMIME;

        static MimeTypes()
        {
            InitExtensionsToMimedictionary();
        }

        public static string GetTypeForExtension(string fileName)
        {
            if (fileName[0] != '.')
                fileName = '.' + fileName;

            var fileExtension = Path.GetExtension(fileName).ToLower();
            try
            {
                return mExtensionsToMIME[fileExtension];
            }
            catch (KeyNotFoundException e)
            {
                throw new Exception(string.Format("No mime type was added to the dictionary for the extension {0}", fileExtension),
                    e);
            }
        }

        private static void InitExtensionsToMimedictionary()
        {
            mExtensionsToMIME = new Dictionary<string, string>();

            mExtensionsToMIME.Add(".png", "image/png");
            mExtensionsToMIME.Add(".jpg", "image/jpeg");
            mExtensionsToMIME.Add(".jpeg", "image/jpeg");

            mExtensionsToMIME.Add(".xml", "application/xml");
            mExtensionsToMIME.Add(".json", "application/json");
        }
    }
}