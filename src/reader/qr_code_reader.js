import QrCode from '../lib/qrcode-reader';

var qr = new QrCode();

var properties = {
    FORMAT: { value: "qr_code", writeable: false }
};

QrCodeReader.prototype = Object.create(QrCodeReader.prototype, properties);
QrCodeReader.prototype.constructor = QrCodeReader;

function QrCodeReader(config, supplements) {
    this._row = [];
    this.config = config || {};
    this.supplements = supplements;
    return this;
}

QrCodeReader.prototype.decodePattern = function (pattern, inputImageWrapper) {
    var result = qr.decode({ width: inputImageWrapper.size.x, height: inputImageWrapper.size.y }, inputImageWrapper.data);
    if (result === null) {
        return null;
    }
    return { code: result && result.result };
};

export default QrCodeReader;