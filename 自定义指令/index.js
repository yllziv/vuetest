    Vue.directive('select', {
      twoWay: true,
      params: ['options'],
      bind: function () {
        var self = this
        $(this.el)
          .select2({
            data: this.params.options
          })
          .on('change', function () {
            self.set(this.value)
          })
      },
      update: function (value) {
        $(this.el).val(value).trigger('change')
      },
      unbind: function () {
        $(this.el).off().select2('destroy')
      }
    })
    var vm = new Vue({
      el: '#el',
      data: {
        selected: 0,
        options: [
          { id: 1, text: 'hello' },
          { id: 2, text: 'what' }
        ]
      }
    })
