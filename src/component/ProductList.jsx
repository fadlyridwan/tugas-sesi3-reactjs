function ProductList() {
    return ( 
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32">
            <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
                <img className="p-8 rounded-t-lg" src="https://static.bhphoto.com/images/multiple_images/images500x500/1673432145_IMG_1916182.jpg" alt="product image" />
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-sky-900 cursor-pointer">Audio-Technica ATH-M50xSTS-USB StreamSet Headset with USB Connector</h5>
                    <span className="text-3xl font-bold text-sky-900">Rp16.000.000</span>
                    <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-5">Add to cart</button>
                </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
                <img className="p-8 rounded-t-lg" src="https://static.bhphoto.com/images/images500x500/1666178494_1731117.jpg" alt="product image" />
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-sky-900">Apple 12.9" iPad Pro M2 Chip (Late 2022, 256GB, Wi-Fi Only, Space Gray)</h5>
                    <span className="text-3xl font-bold text-sky-900">Rp40.000.000</span>
                    <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-5">Add to cart</button>
                </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
                <img className="p-8 rounded-t-lg" src="https://static.bhphoto.com/images/images500x500/1643812544_1669224.jpg" alt="product image" />
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-sky-900">Sony Xperia PRO-I 512GB 5G Smartphone (Unlocked, Frosted Black)</h5>
                    <span className="text-3xl font-bold text-sky-900">Rp32.000.000</span>
                    <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-5">Add to cart</button>
                </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
                <img className="p-8 rounded-t-lg" src="https://static.bhphoto.com/images/images500x500/1606239950_1599312.jpg" alt="product image" />
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-sky-900">RODE Vlogger Kit iOS Edition Filmmaking Kit for Mobile Devices</h5>
                    <span className="text-3xl font-bold text-sky-900">Rp10.000.000</span>
                    <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-5">Add to cart</button>
                </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
                <img className="p-8 rounded-t-lg" src="https://static.bhphoto.com/images/images500x500/1658234999_1681279.jpg" alt="product image" />
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-sky-900">Panasonic RX-D550 Bluetooth Boombox with CD Player</h5>
                    <span className="text-3xl font-bold text-sky-900">Rp14.000.000</span>
                    <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-5">Add to cart</button>
                </div>
            </div>
            <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
                <img className="p-8 rounded-t-lg" src="https://static.bhphoto.com/images/images500x500/1629974168_1661542.jpg" alt="product image" />
                <div className="px-5 pb-5">
                    <h5 className="text-xl font-semibold tracking-tight text-sky-900">Fitbit Charge 5 Fitness & Health Tracker (Black / Graphite Stainless Steel)</h5>
                    <span className="text-3xl font-bold text-sky-900">Rp12.300.000</span>
                    <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-5">Add to cart</button>
                </div>
            </div>
        </div>
        </>
     );
}

export default ProductList;