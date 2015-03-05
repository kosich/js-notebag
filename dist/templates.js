angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("components/main.html","<div class=\'container-fluid\'>\n    <section class=\'row\'>\n        <aside class=\'col-md-3 col-sm-3\'>\n            <div class=\'form-group\'>\n                <input type=\'text\' placeholder=\'filter\' tabindex=\'4\' class=\'form-control\' ng-model=\'filterString\' >\n            </div>\n            <div class=\'clearfix\'\n                ng-repeat=\'anote in main.notes | filter:filterString | limitTo:10\'>\n                <button type=\"button\" ng-click=\'main.remove(anote)\' class=\"close\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <div class=\'bold\'>\n                    <a href ng-click=\'main.open(anote)\'>\n                        {{ anote.name }}\n                    </a>\n                </div>\n                <div class=\'small hidden-xs \'>{{ anote.text|shorten }}</div>\n                <hr ng-if=\'!$last\' class=\'hidden-xs\' />\n            </div>\n        </aside>\n\n        <main class=\'col-md-9 col-sm-9\'>\n            <br class=\'visible-xs-block\' />\n\n            <form class=\'form form-horizontal\'>\n\n                <div class=\'form-group\'>\n\n                    <div class=\'col-xs-6 col-sm-2\'>\n                        <button tabindex=\'5\' type=\'button\'\n                            ng-click=\'main.create()\'\n                            class=\'btn btn-info btn-block btn-lg\'>new</button>\n                    </div>\n\n                    <div class=\'col-xs-6 col-sm-2 col-sm-push-8\'>\n                        <button tabindex=\'3\' type=\'submit\'\n                            ng-class=\'{ \"btn-danger\" : main.overwriting, \"btn-success\" : main.isnew  }\'\n                            ng-click=\'main.save()\'\n                            ng-disabled=\'!main.note.name\'\n                            class=\'btn btn-block btn-lg\'>save</button>\n                    </div>\n\n                    <div class=\'visible-xs-block clearfix\' >\n                        <br />\n                    </div>\n\n                    <div class=\'col-sm-8 col-sm-pull-2\'>\n                        <input placeholder=\'name\' tabindex=\'1\' type=\'text\' class=\'form-control input-lg\' ng-model=\'main.note.name\' >\n                    </div>\n\n                </div>\n\n                <div class=\'form-group\'>\n                    <div class=\'col-md-12\'>\n                        <textarea placeholder=\'main.note...\' tabindex=\'2\' class=\'form-control\' rows=\'20\' ng-model=\'main.note.text\'></textarea>\n                    </div>\n                </div>\n\n            </form>\n        </main>\n    </section>\n\n</div>\n");}]);