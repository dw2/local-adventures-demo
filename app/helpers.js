module.exports = function (opts) {
    var config = opts.config;
    return {
        getRandString: function (len) {
            var guid = '';
            for(_i = 0; _i < Math.ceil(len / 4); _i++) {
                guid += Math.floor(Math.random() * 0x10000).toString(16);
            }
            return guid.substring(0, len);
        },
        stringToId: function (str) {
            return str.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        },
        getFileExt: function (str) {
            return str.replace(/.*\.([a-z]+)$/i, '$1');
        },
        getFileBaseName: function (str) {
            return str.split(/\//).pop().replace(/\.[a-z]+$/i, '');
        },
        getFileVersion: function (str) {
            if (str.match(/@/)) return str.replace(/[^@]+@([a-z]+)\.[a-z]+$/i, '$1');
            return 'original'
        },
        truncate: function (str, maxChars) {
            return str.substr(0, maxChars).replace(/\s+\w*$/, '')
        }
    };
}