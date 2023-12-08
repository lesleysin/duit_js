import { randomUUID } from "crypto";
import { DuitElement } from "../lib/element";
import { Nullable } from "../utils/nullable";
import { ID } from "../utils/id";
import { BaseAction } from "../lib/action";

export class DuitLeafElement {
  protected id: ID;
  protected controlled: boolean;
  protected action: Nullable<BaseAction>;

  constructor(id?: string, action?: BaseAction, controlled?: boolean) {
    this.controlled = controlled ?? action !== undefined ?? false;
    this.action = action;
    if (id) {
      this.id = id;
    } else {
      this.id = randomUUID();
    }
  }
}

export class SingleChildLayout extends DuitLeafElement {
  protected child: Nullable<DuitElement>;

  constructor(id?: string, action?: BaseAction, controlled?: boolean) {
    super(id, action, controlled);
  }

  /**
   * Adds a child element to the current element.
   *
   * @param {T} child - The child element to be added.
   * @return {this} Returns the current element with the child added.
   */
  addChild<T extends DuitElement>(child: T): this {
    this.child = child;
    return this;
  }

}

export class MultiChildLayout extends DuitLeafElement {
  protected children: Nullable<DuitElement[]> = [];

  constructor(id?: string, action?: BaseAction, controlled?: boolean) {
    super(id, action, controlled);
  }

  /**
   * Adds a child element to the current element.
   *
   * @param {T} child - The child element to be added.
   * @return {this} - The current element with the child added.
   */
  addChild<T extends DuitElement>(child: T): this {
    this.children?.push(child);
    return this;
  }

  /**
 * Adds children to the element.
 *
 * @param {T[]} children - An array of DuitElement objects to be added as children.
 * @return {this} - The updated instance of the class.
 */
  addChildren<T extends DuitElement>(children: T[] = []): this {
    children.forEach((child) => this.children?.push(child));
    return this;
  }
}