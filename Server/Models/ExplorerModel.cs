using System.Collections.Generic;

namespace FileDirBrowserServer.Models
{
    public class DirModel
    {
        public string DirName { get; set; }
    }

    public class FileModel
    {
        public string Name { get; set; }
        public double FileSize { get; set; }
    }

    public class ExplorerModel
    {
        public string CurrentFolder { get; set; }
        public List<DirModel> DirModelList;
        public List<FileModel> FileModelList;

        public ExplorerModel(List<DirModel> dirModelList, List<FileModel> fileModelList, string currentFolder)
        {
            CurrentFolder = currentFolder;
            DirModelList = dirModelList;
            FileModelList = fileModelList;
        }
    }
}