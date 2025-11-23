/**
 * Widget
 * @ignore(tabris)
 */
qx.Class.define("ville.tabris.Widget", {
    extend: qx.core.Object,

    construct(attributes) {
        this._attributes = attributes;
        this._nonsettableprops = ['padding'];
        this.initAppearance();
        if (this._initattributes)
            this.Widget = tabris.Widget(this._initattributes);
        else
            this.Widget = tabris.Widget({...attributes});
    },

    properties: {

        appearance: {
            init: "widget",
            nullable: true,
            check: "String",
            apply: "_applyAppearance"
        }

    },

    members: {

        Widget: null,

        _attributes: null,

        _initattributes: null,

        _nonsettableprops: null,

        _applyAppearance(value) {
            if (value) {
                if (value in ville.tabris.theme.Appearance) {
                    let firstlevel = null;
                    let secondlevel = null;
                    let baselevel = null;
                    const appearance = ville.tabris.theme.Appearance[value];
                    if ('include' in appearance) {
                        if (appearance.include in ville.tabris.theme.Appearance) {
                            firstlevel = ville.tabris.theme.Appearance[appearance.include];
                            if ('include' in firstlevel) {
                                if (firstlevel.include in ville.tabris.theme.Appearance) {
                                    secondlevel = ville.tabris.theme.Appearance[firstlevel.include];
                                    if ('include' in secondlevel) {
                                        if (secondlevel.include in ville.tabris.theme.Appearance) {
                                            baselevel = ville.tabris.theme.Appearance[secondlevel.include];
                                        }
                                    }
                                }
                            }
                        }
                    }

                    // Execute style functions on each before merging objects
                    const target = {};
                    if (baselevel) {
                        if ('style' in baselevel) {
                            if (qx.Bootstrap.isFunction(baselevel.style))
                                qx.Bootstrap.objectMergeWith(target, baselevel.style(), true);
                            else
                                qx.Bootstrap.objectMergeWith(target, baselevel, true);
                        } else {
                            qx.Bootstrap.objectMergeWith(target, baselevel, true);
                        }
                    }
                    if (secondlevel) {
                        if ('style' in secondlevel) {
                            if (qx.Bootstrap.isFunction(secondlevel.style))
                                qx.Bootstrap.objectMergeWith(target, secondlevel.style(), true);
                            else
                                qx.Bootstrap.objectMergeWith(target, secondlevel, true);
                        } else {
                            qx.Bootstrap.objectMergeWith(target, secondlevel, true);
                        }
                    }
                    if (firstlevel) {
                        if ('style' in firstlevel) {
                            if (qx.Bootstrap.isFunction(firstlevel.style))
                                qx.Bootstrap.objectMergeWith(target, firstlevel.style(), true);
                            else
                                qx.Bootstrap.objectMergeWith(target, firstlevel, true);
                        } else {
                            qx.Bootstrap.objectMergeWith(target, firstlevel, true);
                        }
                    }
                    if (appearance) {
                        if ('style' in appearance) {
                            if (qx.Bootstrap.isFunction(appearance.style))
                                qx.Bootstrap.objectMergeWith(target, appearance.style(), true);
                            else
                                qx.Bootstrap.objectMergeWith(target, appearance, true);
                        } else {
                            qx.Bootstrap.objectMergeWith(target, appearance, true);
                        }
                    }
                    if (this._attributes) {
                        qx.Bootstrap.objectMergeWith(target, this._attributes, true);
                        this._attributes = null;
                    }

                    if (this.Widget) {
                        if (this._nonsettableprops) {
                            this._nonsettableprops.forEach(prop => {
                                delete target[prop];
                            });
                        }
                        this.Widget.set(target);
                    } else {
                        this._initattributes = target;
                    }
                }
            }
        }
    }
  });
