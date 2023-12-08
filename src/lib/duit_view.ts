// import path from "path";
import UIBuilder from "./builder";

export default class DuitView {

    /**
     * Retrieves the content of the file specified by the given file path.
     *
     * @param {string} filePath - The path of the file to retrieve.
     * @throws {Error} If an invalid path is provided.
     * @return {string} The content of the file as a JSON string.
     */
    static static(filePath: string): string {
        if (filePath === undefined) throw Error("Invalid path provided");

        const file = require(filePath);
        return JSON.stringify(file);
    }

    /**
     * Creates and returns a new instance of UIBuilder.
     *
     * @return {UIBuilder} A new instance of UIBuilder.
     */
    static builder(): UIBuilder {
        return new UIBuilder();
    }

}