(ns hello-world.core
  (:require [clojure.browser.repl :as repl]))

(defonce conn
  (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(println "Hello world!")

;; ADDED
(defn foo [a b]
  (+ a b))

(defn greet [text]
  (let [stripWhitespace (fn [text] (clojure.string/replace text #"\\s+" ""))
        name (stripWhitespace text)
        greeting (str "Hello, " name ", nice to meet you!")]
    (js/alert greeting)))

