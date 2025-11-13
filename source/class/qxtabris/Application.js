/* ************************************************************************

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew - sqville

************************************************************************ */

const {contentView} = require('tabris');

/**
 * This is the main application class
 * @ignore($)
 * @ignore(tabris)
 */
qx.Class.define("qxtabris.Application", {
  extend: qx.application.Basic,

  properties: {

    qxMessage: {
      init: "Hello Qx world",
      nullable: false,
      check: "String"
    }

  },

  members: {
    main() {

      const QxButton = new ville.tabris.Button({id: 'button1'});
      const qxtextview = new ville.tabris.TextView({id: 'textview1'});

      //onSelect: () => $('#textview1').only().text = 'Env Info: ' + tabris.device.name
      QxButton.Widget.on('select', () => {
        $('#textview1').only().text = 'Qx message: ' + this.getQxMessage();
      });

      // Need to give the Tabris contentView widget Tabris widgets and NOT Qx objects
      contentView.append(
          QxButton.Widget,
          qxtextview.Widget
      );

    }
  }
});
