// Compiled by ClojureScript 1.8.34 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__4294_4308 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4295_4309 = null;
var count__4296_4310 = (0);
var i__4297_4311 = (0);
while(true){
if((i__4297_4311 < count__4296_4310)){
var f_4312 = cljs.core._nth.call(null,chunk__4295_4309,i__4297_4311);
cljs.core.println.call(null,"  ",f_4312);

var G__4313 = seq__4294_4308;
var G__4314 = chunk__4295_4309;
var G__4315 = count__4296_4310;
var G__4316 = (i__4297_4311 + (1));
seq__4294_4308 = G__4313;
chunk__4295_4309 = G__4314;
count__4296_4310 = G__4315;
i__4297_4311 = G__4316;
continue;
} else {
var temp__4657__auto___4317 = cljs.core.seq.call(null,seq__4294_4308);
if(temp__4657__auto___4317){
var seq__4294_4318__$1 = temp__4657__auto___4317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4294_4318__$1)){
var c__3334__auto___4319 = cljs.core.chunk_first.call(null,seq__4294_4318__$1);
var G__4320 = cljs.core.chunk_rest.call(null,seq__4294_4318__$1);
var G__4321 = c__3334__auto___4319;
var G__4322 = cljs.core.count.call(null,c__3334__auto___4319);
var G__4323 = (0);
seq__4294_4308 = G__4320;
chunk__4295_4309 = G__4321;
count__4296_4310 = G__4322;
i__4297_4311 = G__4323;
continue;
} else {
var f_4324 = cljs.core.first.call(null,seq__4294_4318__$1);
cljs.core.println.call(null,"  ",f_4324);

var G__4325 = cljs.core.next.call(null,seq__4294_4318__$1);
var G__4326 = null;
var G__4327 = (0);
var G__4328 = (0);
seq__4294_4308 = G__4325;
chunk__4295_4309 = G__4326;
count__4296_4310 = G__4327;
i__4297_4311 = G__4328;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_4329 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__2951__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__2951__auto__)){
return or__2951__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_4329);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_4329)))?cljs.core.second.call(null,arglists_4329):arglists_4329));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__4298 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__4299 = null;
var count__4300 = (0);
var i__4301 = (0);
while(true){
if((i__4301 < count__4300)){
var vec__4302 = cljs.core._nth.call(null,chunk__4299,i__4301);
var name = cljs.core.nth.call(null,vec__4302,(0),null);
var map__4303 = cljs.core.nth.call(null,vec__4302,(1),null);
var map__4303__$1 = ((((!((map__4303 == null)))?((((map__4303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4303):map__4303);
var doc = cljs.core.get.call(null,map__4303__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__4303__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__4330 = seq__4298;
var G__4331 = chunk__4299;
var G__4332 = count__4300;
var G__4333 = (i__4301 + (1));
seq__4298 = G__4330;
chunk__4299 = G__4331;
count__4300 = G__4332;
i__4301 = G__4333;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__4298);
if(temp__4657__auto__){
var seq__4298__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4298__$1)){
var c__3334__auto__ = cljs.core.chunk_first.call(null,seq__4298__$1);
var G__4334 = cljs.core.chunk_rest.call(null,seq__4298__$1);
var G__4335 = c__3334__auto__;
var G__4336 = cljs.core.count.call(null,c__3334__auto__);
var G__4337 = (0);
seq__4298 = G__4334;
chunk__4299 = G__4335;
count__4300 = G__4336;
i__4301 = G__4337;
continue;
} else {
var vec__4305 = cljs.core.first.call(null,seq__4298__$1);
var name = cljs.core.nth.call(null,vec__4305,(0),null);
var map__4306 = cljs.core.nth.call(null,vec__4305,(1),null);
var map__4306__$1 = ((((!((map__4306 == null)))?((((map__4306.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4306.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4306):map__4306);
var doc = cljs.core.get.call(null,map__4306__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__4306__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__4338 = cljs.core.next.call(null,seq__4298__$1);
var G__4339 = null;
var G__4340 = (0);
var G__4341 = (0);
seq__4298 = G__4338;
chunk__4299 = G__4339;
count__4300 = G__4340;
i__4301 = G__4341;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
