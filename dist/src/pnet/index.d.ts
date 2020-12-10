export = Protector;
/**
 * @typedef {import('libp2p-interfaces/src/transport/types').MultiaddrConnection} MultiaddrConnection
 */
declare class Protector {
    /**
     * Takes a Private Shared Key (psk) and provides a `protect` method
     * for wrapping existing connections in a private encryption stream.
     *
     * @param {Uint8Array} keyBuffer - The private shared key buffer
     * @class
     */
    constructor(keyBuffer: Uint8Array);
    psk: any;
    tag: any;
    /**
     * Takes a given Connection and creates a private encryption stream
     * between its two peers from the PSK the Protector instance was
     * created with.
     *
     * @param {MultiaddrConnection} connection - The connection to protect
     * @returns {Promise<MultiaddrConnection>} A protected duplex iterable
     */
    protect(connection: MultiaddrConnection): Promise<MultiaddrConnection>;
}
declare namespace Protector {
    export { Errors as errors, generate, MultiaddrConnection };
}
type MultiaddrConnection = {
    sink: import("libp2p-interfaces/src/stream-muxer/types").Sink;
    source: () => AsyncIterable<Uint8Array>;
    close: (err?: Error | undefined) => Promise<void>;
    conn: unknown;
    remoteAddr: import("multiaddr");
    localAddr?: import("multiaddr") | undefined;
    timeline: import("libp2p-interfaces/src/transport/types").MultiaddrConnectionTimeline;
};
import Errors = require("./errors");
declare var generate: typeof import("./key-generator");
//# sourceMappingURL=index.d.ts.map