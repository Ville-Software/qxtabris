/* ************************************************************************

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew - sqville

************************************************************************ */

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

      const QxButton1 = new ville.tabris.Button({id: 'button1'});
      const QxTextView1 = new ville.tabris.TextView({id: 'textview1'});

      QxButton1.Widget.on('select', () => {
        $('#textview1').only().text = 'Qx Message: ' + this.getQxMessage();
      });

      // Need to give the Tabris contentView widget Tabris widgets and NOT Qx object
      tabris.contentView.append(
          QxButton1.Widget,
          QxTextView1.Widget
      );

    }

  }
});
