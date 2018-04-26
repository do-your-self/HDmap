/*

递归遍历指定目录的所有*.js（源目录、输出目录）

缓存、增量压缩、混淆（没有改动的文件，第二次不重复压缩，提升性能）

忽略特定目录

*/

function buildFolder(folderInPath, fileOutPath) {

    if (!fs.existsSync(folderInPath)) {

        return console.log(folderInPath + "path not exists");

    }

    /* 忽略特定目录 */

    if (__ignorePaths.indexOf(folderInPath.toLowerCase()) > -1) {

        return console.log('ignore path: ' + folderInPath);

    }

    /*读取所有文件*/

    var files = fs.readdirSync(folderInPath);

    files.forEach(function (filename) {

        var filePath = path.join(folderInPath, filename);

        var stats = fs.statSync(filePath);

        // 文件类型判断

        if (stats.isFile()) {

            var ext = path.extname(filePath).toLowerCase();

            if (ext != ".js") return;

            // 先检查是否有缓存（增量编译）

            if (!checkFileCache(stats, filePath, fileOutPath)) {

                var cachedFilePath = copyFileToCache1(filePath);

                // 没有对应缓存，或文件改变，重新压缩文件

                compressFile(filePath, cachedFilePath, fileOutPath);

            }

            console.log('\r\n');

        } else if (stats.isDirectory()) {

            // 继续递归子目录

            buildFolder(filePath, fileOutPath);

        }

    });

};