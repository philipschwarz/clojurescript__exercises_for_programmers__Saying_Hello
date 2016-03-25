// Compiled by ClojureScript 1.8.34 {}
goog.provide('hello_world.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof hello_world.core.conn !== 'undefined'){
} else {
hello_world.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
hello_world.core.foo = (function hello_world$core$foo(a,b){
return (a + b);
});
hello_world.core.greet = (function hello_world$core$greet(text){
var stripWhitespace = (function (text__$1){
return clojure.string.replace.call(null,text__$1,/\\s+/,"");
});
var name = stripWhitespace.call(null,text);
var greeting = [cljs.core.str("Hello, "),cljs.core.str(name),cljs.core.str(", nice to meet you!")].join('');
return alert(greeting);
});

//# sourceMappingURL=core.js.map