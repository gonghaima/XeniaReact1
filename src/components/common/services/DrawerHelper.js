export default class ToggleDrawerHelper{
    constructor(doc) {
        this.doc=doc;
    }
    toggle(){
        var layout = this.doc.querySelector('.mdl-layout');
        if ((layout.MaterialLayout)&&(layout.MaterialLayout.toggleDrawer)&&(typeof layout.MaterialLayout.toggleDrawer == 'function')) {
            layout
                .MaterialLayout
                .toggleDrawer();
        }
    }
    close(){
      var layout = this.doc.querySelector('.mdl-layout');
      if ((layout.MaterialLayout)&&(layout.MaterialLayout.toggleDrawer)&&(typeof layout.MaterialLayout.toggleDrawer == 'function')) {
          layout
              .MaterialLayout
              .ToggleDrawerHelper().close();
      }
  }
}
