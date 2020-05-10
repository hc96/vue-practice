import '../css/style.css'
import '../css/style.less'
import '../css/style.scss'

import $ from 'jquery'
import Vue from 'vue'

$(function() {
  $('li:odd').css('backgroundColor', 'yellow')
  $('li:even').css('backgroundColor', 'lightblue')
})


class Person {
  static info = 'person'
}

console.log(Person.info)


// usage of vue

import App from '../components/App.vue'

const vm = new Vue({el: '#app', render: h => h(App)})