export interface MaterialStateProperty<T> {
    disabled?: T;
    hovered?: T;
    focused?: T;
    pressed?: T;
    dragged?: T;
    selected?: T;
    error?: T;
}