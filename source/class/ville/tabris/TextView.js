/**
 * TextView
 * @ignore(tabris)
 */
qx.Class.define("ville.tabris.TextView", {
    extend: ville.tabris.Widget,

    construct(attributes) {
        this._attributes = attributes;
        this._nonsettableprops = ['padding'];
        this.initAppearance();
        if (this._initattributes)
            this.Widget = tabris.TextView(this._initattributes);
        else
            this.Widget = tabris.TextView({...attributes});
    },

    properties: {

        // Override
        appearance: {
            init: "textview",
            refine: true
        }

    }
  });
