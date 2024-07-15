function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    let htmlscanner;

    function onScanSuccess(decodeText, decodeResult) {
        let url = new URL(window.location.href);
        let domain = url.hostname;

        // Ensure the scanned URL is HTTPS
        const scannedUrl = decodeText.startsWith('http://')
            ? decodeText.replace('http://', 'https://')
            : `https://${domain}/gatepass/security/${decodeText}`;

        // Stop the HTML5 QR code scanner
        if (htmlscanner) {
            htmlscanner.clear(); // Stops the scanning process and releases the camera
        }

        // Show the popup with the scanned URL
        document.getElementById('popup-content').src = scannedUrl;
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('popup').style.display = 'block';
    }

    function closePopup() {
        // Close the popup and clear the iframe src
        document.getElementById('popup-content').src = '';
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('popup').style.display = 'none';
        window.location.reload();
    }

    // Add event listeners to close buttons
    document.getElementById('popup-close').addEventListener('click', closePopup);
    document.getElementById('popup-close1').addEventListener('click', closePopup);

    // // Initialize the HTML5 QR code scanner
    htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 }
    );
    // Initialize the HTML5 QR code scanner
    // htmlscanner = new Html5QrcodeScanner(
    //     "my-qr-reader",
    //     {
    //         fps: 10,
    //         qrbox: 250,
    //         supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
    //         // Specify constraints to prefer back camera
    //         qrCodeSuccessCallback: onScanSuccess,
    //         facingMode: { ideal: "environment" } // This suggests using the back camera
    //     }
    // );
    htmlscanner.render(onScanSuccess);
});
