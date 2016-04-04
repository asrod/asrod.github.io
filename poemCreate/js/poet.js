var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.str = [];
    $scope.geneNum = 10;

    $scope.generatePoem = function() {
        $scope.str = [];
        $scope.poemCreate($scope.geneNum);
    }

    $scope.setNum = function(num) {
        $scope.geneNum = num;
    }

    $scope.clearPoem = function() {
        $scope.str = [];
    }
    $scope.poemCreate = function(num) {
        var two_chart_word = ['朱砂', '天下', '杀伐', '人家', '韶华', '风华', '繁华', '血染', '墨染', '白衣', '素衣', '嫁衣', '倾城', '孤城', '空城', '旧城', '旧人', '伊人', '心疼', '春风', '古琴', '无情', '迷离', '奈何', '断弦', '焚尽', '散乱', '陌路', '乱世', '笑靥', '浅笑', '明眸', '轻叹', '烟火', '一生', '三生', '浮生', ' 桃花', '梨花', '落花', '烟花', '离殇', '情殇', '爱殇', '剑殇', '灼伤', '仓皇', '匆忙', '陌上', '清商', '焚香', '墨香', '微凉', '断肠', '痴狂', '凄凉', '黄梁', '未央', '成双', '无恙', '虚妄', '凝霜', '洛阳', '长安', '江南', '忘川', '千年', '纸伞', '烟雨', '回眸', '公子', '红尘', '红颜', '红衣', '红豆', '红线', '青丝', '青史', '青冢', '白发', '白首', '白骨,', '黄土', '黄泉', '碧落', '紫陌'];

        var four_chars_words = ['情深缘浅', '情深不寿', '莫失莫忘', '阴阳相隔', '如花美眷', '似水流年', '眉目如画', '曲终人散', '繁华落尽', '不诉离殇 ', '一世长安'];
        var sentence_model = ['xx，xx，xx了xx。', 'aaaa，aaaa，不过是一场aaaa。', '你说aaaa，我说aaaa，最后不过aaaa。', 'xx，xx，许我一场xxxx。 一b一b一xx，半b半b半xx。', '你说xxxxxxxx，后来xxxxxxxx。', 'xxxx，xxxx，终不敌xxxx。'];

        for (var i = 0; i < num; i++) {
            //   console.log(Math.floor(Math.random()*sentence_model.length));
            str = sentence_model[Math.floor(Math.random() * sentence_model.length)];
            //   console.log("xx="+countSubstr(str,"xx",true));
            //    console.log("aaaa="+countSubstr(str,"aaaa",true));
            var oneRange = countSubstr(str, "b", true);
            var twoRange = countSubstr(str, "xx", true);
            var fourRange = countSubstr(str, "aaaa", true);
            for (var j = 0; j < oneRange; j++) {
                var twoStr = two_chart_word[Math.floor(Math.random() * two_chart_word.length)];
                str = str.replace("b", twoStr[0]);
            }
            for (var j = 0; j < twoRange; j++) {
                var twoStr = two_chart_word[Math.floor(Math.random() * two_chart_word.length)];
                str = str.replace("xx", twoStr);
            }
            for (var j = 0; j < fourRange; j++) {
                var fourStr = four_chars_words[Math.floor(Math.random() * four_chars_words.length)];
                str = str.replace("aaaa", fourStr);
            }
            $scope.str.push(str);
        }
    }
});



function countSubstr(str, substr, isIgnore) {
    var count;
    var reg = "";
    if (isIgnore == true) {
        reg = "/" + substr + "/gi";
    } else {
        reg = "/" + substr + "/g";
    }
    reg = eval(reg);
    if (str.match(reg) == null) {
        count = 0;
    } else {
        count = str.match(reg).length;
    }
    return count;
}