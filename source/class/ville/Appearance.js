/**
 * Appearance
 * 
 */
qx.Class.define("ville.Appearance",
{
  type: "static",

  statics :
  {
    widget: {},

    textview : {
      centerX: true,
      top: 'prev() 50',
      font: '24px'
    },

    "button-base" :
    {
      style: "default",
      textColor: "white"
    },

    button :
    {
      include : "button-base",

      style()
      {
        return {
          centerX: true,
          top: 100,
          text: 'Button',
          background: 'purple',
          width: 200,
          cornerRadius: 20
        };
      }
    }
  }
});
