/**
 * Button
 * @ignore(tabris)
 */
qx.Class.define("ville.tabris.Button", {
  extend: ville.tabris.Widget,

  construct(attributes) {
      this._attributes = attributes;
      this._nonsettableprops = ['padding','style'];
      this.initAppearance();
      if (this._initattributes)
        this.Widget = tabris.Button(this._initattributes);
      else
        this.Widget = tabris.Button({...attributes});
  },

  properties: {

    // Override
    appearance: {
        init: "button",
        refine: true
    }

  }
});
