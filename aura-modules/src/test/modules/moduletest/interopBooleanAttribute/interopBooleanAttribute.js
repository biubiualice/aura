import { LightningElement, api } from "lwc";

export default class InteropBooleanAttribute extends LightningElement {
    // What makes this a boolean attribute from the perspective of the interop
    // layer is that its default value is boolean false.
    @api get booleanAttribute() {
        return this._booleanAttribute || false;
    }
    set booleanAttribute(value) {
        this._booleanAttribute = value;
    }

    // What makes this a non-boolean attribute from the perspective of the
    // interop layer is that its default value is not boolean false.
    @api get nonBooleanAttribute() {
        return this._nonBooleanAttribute;
    }
    set nonBooleanAttribute(value) {
        this._nonBooleanAttribute = value;
    }
}
