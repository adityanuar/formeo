import Control from '../control'

class TinyMCEControl extends Control {
  constructor() {
    const tinymceConfig = {
      tag: 'textarea',
      config: {
        label: 'WYSIWYG',
      },
      meta: {
        group: 'html',
        icon: 'rich-text',
        id: 'tinymce',
      },
      attrs: {
        required: false,
      },
      action: {
        onRender: evt => {
          if (evt.id) {
            this.textareaID = evt.id
            console.log('render ', evt.id)
            window.tinymce.remove('textarea#' + evt.id)
            window.tinymce.init({
              selector: 'textarea#' + evt.id,
            })
          }
        },
      },
    }
    super(tinymceConfig)
  }
}

export default TinyMCEControl
