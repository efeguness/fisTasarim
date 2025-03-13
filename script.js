const randomData = {
    customerNames: [
        'Ahmet Yılmaz', 'Ayşe Demir', 'Mehmet Öztürk', 'Fatma Çelik', 'Ali Kaya',
        'Zeynep Şahin', 'Mustafa Arslan', 'Elif Yıldız', 'Hüseyin Öz', 'Gülsüm Aydın',
        'İbrahim Koç', 'Hatice Kurt', 'Murat Özdemir', 'Emine Güneş', 'Hasan Doğan',
        'Merve Yalçın', 'Emre Aslan', 'Seda Bulut', 'Burak Yüksel', 'Deniz Şen'
    ],
    
    addresses: [
        'Atatürk Cad. No:123 Kadıköy/İstanbul',
        'Cumhuriyet Mah. Yavuz Sok. No:45 Beşiktaş/İstanbul',
        'Bahçelievler Mah. Menekşe Cad. No:7/3 Bahçelievler/İstanbul',
        'Merkez Mah. Çiçek Sok. No:12 Daire:5 Şişli/İstanbul',
        'Fatih Cad. Gül Apt. No:25 Kat:3 Üsküdar/İstanbul',
        'Kurtuluş Mah. İnönü Cad. No:34/B Kartal/İstanbul',
        'Barbaros Hayrettin Paşa Cad. No:55 Bakırköy/İstanbul',
        'Yeni Mah. Eski Sok. No:42 Daire:8 Maltepe/İstanbul',
        'Bağdat Cad. No:156 Göztepe/İstanbul',
        'İstiklal Cad. No:78 Kat:4 Beyoğlu/İstanbul'
    ],
    
    addressNotes: [
        'Apartman girişi şifresi: 1234',
        'Site içi, güvenliğe haber verin',
        'Kapıcıya bırakabilirsiniz',
        'Köşedeki bina, 2. kapı',
        'Mavi kapılı apartman',
        'Asansör bozuk, 4. kat',
        'Zil çalışmıyor, arayın lütfen',
        'Arka sokaktan girin',
        'Sitenin D blok girişi',
        'Üst kapıdan gelin lütfen'
    ],
    
    foodItems: [
        'Adana Kebap', 'Karışık Pide', 'Tavuk Şiş', 'Lahmacun', 'İskender',
        'Beyti', 'Köfte Porsiyon', 'Urfa Kebap', 'Kuzu Tandır', 'Pideli Köfte',
        'Kaşarlı Pide', 'Kıymalı Pide', 'Kuşbaşılı Pide', 'Ali Nazik', 'Çökertme Kebabı',
        'Cağ Kebabı', 'Döner Porsiyon', 'Tavuk Döner', 'Etli Ekmek', 'Mantı'
    ],
    
    drinkItems: [
        'Ayran', 'Coca Cola', 'Fanta', 'Sprite', 'Meyve Suyu',
        'Şalgam', 'Soda', 'Su', 'Limonata', 'Ice Tea',
        'Türk Kahvesi', 'Nescafe', 'Çay', 'Bitki Çayı', 'Soğuk Kahve'
    ],
    
    dessertItems: [
        'Baklava', 'Künefe', 'Sütlaç', 'Kazandibi', 'Revani',
        'Şekerpare', 'Kemalpaşa', 'Kadayıf', 'Profiterol', 'Dondurma',
        'Supangle', 'Trileçe', 'Muhallebi', 'Aşure', 'Magnolia'
    ],
    
    orderNotes: [
        'Acılı olsun lütfen',
        'Az pişmiş olsun',
        'Soğansız hazırlayın',
        'Ekstra ketçap ve mayonez ekleyin',
        'Biberler közlenmiş olsun',
        'Çok bekletmeyin lütfen',
        'Tavuklar iyi pişmiş olsun',
        'İçecekler soğuk olsun',
        'Sarımsaklı olmasın',
        'Extra sos ekleyin',
        'Yağsız olsun mümkünse',
        'Baharatlı olsun',
        'Salata bol malzemeli olsun',
        'Ekmek az kızarmış olsun',
        'Et ince doğranmış olsun'
    ],
    
    externalNotes: [
        'Masayı pencere kenarına kurun',
        'Çocuk sandalyesi gerekli',
        'Doğum günü için pasta kesilecek',
        'Özel gün masası hazırlayın',
        'Köşe masa olsun lütfen',
        'Manzaralı yere alın',
        'Sessiz bir köşe tercih edilir',
        'Bebek arabası için yer olsun',
        'Engelli misafir için erişim kolay olsun',
        'Sigara içilmeyen bölümde olsun'
    ],
    
    paymentMethods: [
        'Nakit', 'Kredi Kartı', 'Banka Kartı', 'Yemek Kartı', 'Mobil Ödeme',
        'Havale/EFT', 'QR Kod', 'Çek', 'Sodexo', 'Multinet'
    ],
    
    tables: [
        'MASA 1', 'MASA 2', 'MASA 3', 'MASA 4', 'MASA 5',
        'MASA 6', 'MASA 7', 'MASA 8', 'MASA 9', 'MASA 10',
        'VIP MASA', 'BAHÇE 1', 'BAHÇE 2', 'TERAS 1', 'TERAS 2'
    ],
    
    tableGroups: [
        'A Bölümü', 'B Bölümü', 'C Bölümü', 'Teras', 'Bahçe',
        'VIP', 'Giriş Kat', '1. Kat', '2. Kat', 'Havuz Başı'
    ],
    
    employeeNames: [
        'Ali Demir', 'Ayşe Yıldız', 'Mehmet Can', 'Fatma Şahin', 'Mustafa Öz',
        'Zeynep Yılmaz', 'Hüseyin Kaya', 'Emine Çelik', 'Ahmet Koç', 'Hatice Aydın'
    ],
    
    phoneNumbers: [
        '0555 123 4567', '0532 234 5678', '0505 345 6789', '0542 456 7890', '0535 567 8901',
        '0549 678 9012', '0545 789 0123', '0533 890 1234', '0543 901 2345', '0538 012 3456'
    ],
    
    restaurants: [
        'KAHVE DÜNYASI', 'KÖFTECI YUSUF', 'SULTANAHMET KÖFTECISI', 'HATAY MEDENIYETLER SOFRASI', 'ÇIYA KEBAP',
        'GÜNAYDINCI', 'DEVELI KEBAP', 'KONYALI AHMET USTA', 'BALKAN LOKANTASI', 'ANTEBI',
        'HACIBAŞAR KEBAP', 'LEZZET-I ŞARK', 'PIDE BAHÇESI', 'TARIHI KAFETERYA', 'ANADOLU LEZZETLERI'
    ],
    
    productCodes: [
        'PRD001', 'PRD002', 'PRD003', 'PRD004', 'PRD005',
        'PRD006', 'PRD007', 'PRD008', 'PRD009', 'PRD010',
        'UR001', 'UR002', 'UR003', 'BY001', 'BY002',
        'IC001', 'IC002', 'IC003', 'TS001', 'TS002'
    ],
    
    categories: [
        'Ana Yemek', 'İçecek', 'Tatlı', 'Salata', 'Başlangıç',
        'Kebaplar', 'Pideler', 'Çorbalar', 'Mezeler', 'Kahvaltı'
    ],
    
    tableFeatures: [
        'Terasta', 'Bahçede', 'Pencere Kenarı', 'Köşe Masa', 'Bar Bölümü',
        'VIP Bölüm', 'Şömine Yanı', 'Deniz Manzaralı', 'Giriş Katı', 'Üst Kat'
    ],
    
    companyNames: [
        'ABC Ltd. Şti.', 'XYZ A.Ş.', 'Birlik Ticaret', 'Yıldız Gıda',
        'Mega Holding', 'Özgün Şirketler Grubu', 'Anadolu İşletmeleri',
        'Güven Dağıtım', 'Doğa Gıda', 'İstanbul Ticaret'
    ],
    
    taxNumbers: [
        'VKN: 1234567890', 'VKN: 0987654321', 'VKN: 2468013579',
        'VKN: 1357924680', 'VKN: 9876543210'
    ],
    
    branches: [
        'Kadıköy Şube', 'Beşiktaş Şube', 'Bakırköy Şube', 'Levent Şube',
        'Ataşehir Şube', 'Beylikdüzü Şube', 'Üsküdar Şube', 'Ümraniye Şube'
    ],
    
    units: [
        'Adet', 'Porsiyon', 'Kg', 'Gr', 'Paket', 'Dilim', 'Tabak'
    ],
    
    orderTypes: [
        'Masa Siparişi', 'Paket Servis', 'Al-Götür', 'Online Sipariş', 'Kurye Siparişi'
    ],
    
    couponCodes: [
        'INDIRIM10', 'OZEL25', 'FIRSAT50', 'YENIYIL15', 'DOGUMGUNU20'
    ],
    
    creditCardNumbers: [
        '**** **** **** 1234', '**** **** **** 5678', '**** **** **** 9012',
        '**** **** **** 3456', '**** **** **** 7890'
    ],
    
    featureTexts: [
        'Az Pişmiş', 'Orta Pişmiş', 'Çok Pişmiş', 'Acılı', 'Acısız',
        'Soğansız', 'Sarımsaklı', 'Ketçaplı', 'Mayonezli', 'Ekstra Peynirli'
    ]
};

// -----------------------------------------------------------------------------------------------------------------------------

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomPrice(min = 20, max = 300) {
    return (Math.random() * (max - min) + min).toFixed(2);
}

function getRandomOrderID() {
    return Math.floor(Math.random() * 100000).toString().padStart(5, '0');
}

function getRandomDateTime() {
    const now = new Date();
    const randomDaysAgo = Math.floor(Math.random() * 30);
    const randomHours = Math.floor(Math.random() * 14) + 8; // 08:00 - 22:00 arası
    const randomMinutes = Math.floor(Math.random() * 60);
    
    const date = new Date(now);
    date.setDate(date.getDate() - randomDaysAgo);
    date.setHours(randomHours, randomMinutes, 0, 0);
    
    return date;
}

function formatDate(date, format) {
    if (!date) date = getRandomDateTime();
    
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    
    if (format.includes('HH:mm')) {
        return `${hours}:${minutes}`;
    } else if (format.includes('dd.MM.yyyy HH:mm')) {
        return `${day}.${month}.${year} ${hours}:${minutes}`;
    } else {
        return `${day}.${month}.${year}`;
    }
}

// -----------------------------------------------------------------------------------------------------------------------------

const fileInput = document.getElementById('file-input');
const receiptElement = document.getElementById('receipt');
const xmlContentElement = document.getElementById('xml-content');
const printBtn = document.getElementById('print-btn');
const scaleSelect = document.getElementById('scale-select');

// -----------------------------------------------------------------------------------------------------------------------------

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.xml')) {
        showError('Lütfen sadece .xml uzantılı dosya yükleyin.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const xmlText = e.target.result;
            processXmlFile(xmlText);
        } catch (error) {
            showError(`Dosya işlenirken hata oluştu: ${error.message}`);
        }
    };
    reader.onerror = () => {
        showError('Dosya okunamadı.');
    };
    reader.readAsText(file);
}

function processXmlFile(xmlText) {
    try {
        xmlContentElement.textContent = xmlText;

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        
        const parseError = xmlDoc.querySelector('parsererror');
        if (parseError) {
            throw new Error('XML dosyası geçerli değil.');
        }

        const prjReport = xmlDoc.querySelector('prjReport');
        const columnCount = parseInt(prjReport.getAttribute('columncount')) || 40;
        
        generateReceipt(xmlDoc, columnCount);
        
        printBtn.disabled = false;
        printBtn.classList.remove('disabled');
    } catch (error) {
        showError(`XML işlenirken hata oluştu: ${error.message}`);
    }
}

// -----------------------------------------------------------------------------------------------------------------------------

function generateReceipt(xmlDoc, columnCount) {
    receiptElement.innerHTML = '';
    receiptElement.style.width = columnCount * 8 + 'px';
    
    const orderContext = createRandomOrderContext();
    
    const panels = xmlDoc.querySelectorAll('panels');
    
    panels.forEach(panel => {
        const table = panel.getAttribute('table');
        const type = panel.getAttribute('type');
        
        const panelDiv = document.createElement('div');
        panelDiv.className = `panel ${table} ${type || ''}`;
        
        const bricks = panel.querySelectorAll('bricks');
        
        let maxRow = 0;
        bricks.forEach(brick => {
            const row = parseInt(brick.getAttribute('row') || '0');
            maxRow = Math.max(maxRow, row);
        });
        
        const rows = Array(maxRow + 1).fill().map(() => Array(columnCount).fill(' '));
        
        bricks.forEach(brick => {
            const row = parseInt(brick.getAttribute('row') || '0');
            const left = parseInt(brick.getAttribute('left') || '0');
            const width = parseInt(brick.getAttribute('width') || '10');
            const align = brick.getAttribute('align') || 'left';
            
            const format = brick.getAttribute('format') || '';
            const field = brick.getAttribute('field') || '';
            
            let displayText = processFormatString(format, field, orderContext);
            
            placeTextInRow(rows[row], displayText, left, width, align);
        });
        
        rows.forEach(rowChars => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'receipt-row';
            rowDiv.textContent = rowChars.join('');
            panelDiv.appendChild(rowDiv);
        });
        
        receiptElement.appendChild(panelDiv);
    });
}

// -----------------------------------------------------------------------------------------------------------------------------

function processFormatString(format, field, orderContext) {
    if (!format.includes('{0')) {
        return format;
    }
    
    try {
        const formatMatch = format.match(/{0(?::([^}]*))?}/);
        const formatType = formatMatch && formatMatch[1] ? formatMatch[1] : '';
        
        let value;
        
        if (field.toLowerCase().includes('price') || field.toLowerCase().includes('amount') || 
            field.toLowerCase().includes('total') || field.toLowerCase().includes('discount')) {

            value = getRandomPrice(formatType.startsWith('n') ? 50 : 100, 
                                  formatType.startsWith('n') ? 250 : 500);
            if (field.toLowerCase().includes('discount')) {
                value = getRandomPrice(5, 30);
            }
        } 
        else if (field.toLowerCase().includes('date') || field.toLowerCase().includes('time')) {

            value = formatDate(field.toLowerCase().includes('system') ? new Date() : getRandomDateTime(), 
                              formatType || 'dd.MM.yyyy HH:mm');
        } 
        else {
            value = generateSampleData(field, format, orderContext);
        }
        
        let formattedValue = value;
        
        if (formatType) {
            if (formatType.startsWith('n')) {
                const decimalPlaces = parseInt(formatType.substring(1)) || 2;
                formattedValue = parseFloat(value).toFixed(decimalPlaces);
            } 
            else if (formatType.startsWith('c')) {
                const decimalPlaces = parseInt(formatType.substring(1)) || 2;
                formattedValue = parseFloat(value).toFixed(decimalPlaces) + " ₺";
            }
            else if (formatType.startsWith('p')) {
                const decimalPlaces = parseInt(formatType.substring(1)) || 0;
                formattedValue = (parseFloat(value) * 100).toFixed(decimalPlaces) + "%";
            }
        }
        
        return format.replace(/{0(?::[^}]*)?}/, formattedValue);
    } catch (error) {
        console.error("Format işleme hatası:", error, format, field);
        return format; 
    }
}

// -----------------------------------------------------------------------------------------------------------------------------

function createRandomOrderContext() {
    const restaurantName = getRandomItem(randomData.restaurants);
    const customerName = getRandomItem(randomData.customerNames);
    const address = getRandomItem(randomData.addresses);
    const addressNote = getRandomItem(randomData.addressNotes);
    const orderNote = getRandomItem(randomData.orderNotes);
    const externalNote = getRandomItem(randomData.externalNotes);
    const employeeName = getRandomItem(randomData.employeeNames);
    const tableID = getRandomItem(randomData.tables);
    const tableGroup = getRandomItem(randomData.tableGroups);
    const orderID = getRandomOrderID();
    const receiptNo = getRandomOrderID();
    const phoneNumber = getRandomItem(randomData.phoneNumbers);
    
    const orderDate = getRandomDateTime();
    
    const paymentMethod = getRandomItem(randomData.paymentMethods);
    
    const orderItems = [];
    const itemCount = Math.floor(Math.random() * 6) + 1;
    
    let totalPrice = 0;
    for (let i = 0; i < itemCount; i++) {
        const isFood = Math.random() > 0.3;
        const isDrink = !isFood && Math.random() > 0.5;
        
        let itemName;
        if (isFood) {
            itemName = getRandomItem(randomData.foodItems);
        } else if (isDrink) {
            itemName = getRandomItem(randomData.drinkItems);
        } else {
            itemName = getRandomItem(randomData.dessertItems);
        }
        
        const quantity = Math.floor(Math.random() * 3) + 1;
        const price = getRandomPrice(isFood ? 50 : 15, isFood ? 200 : 50);
        const extendedPrice = (quantity * parseFloat(price)).toFixed(2);
        
        totalPrice += parseFloat(extendedPrice);
        
        orderItems.push({
            quantity: quantity,
            name: itemName,
            price: price,
            extendedPrice: extendedPrice
        });
    }
    
    const discountRate = Math.random() > 0.7 ? Math.floor(Math.random() * 20) + 5 : 0;
    const discountAmount = ((totalPrice * discountRate) / 100).toFixed(2);
    const finalTotal = (totalPrice - parseFloat(discountAmount)).toFixed(2);
    
    const paidAmount = Math.random() > 0.2 ? finalTotal : (finalTotal * 0.7).toFixed(2);
    const balance = (finalTotal - paidAmount).toFixed(2);
    
    return {
        restaurantName,
        customerName,
        address,
        addressNote,
        orderNote,
        externalNote,
        employeeName,
        tableID,
        tableGroup,
        orderID,
        receiptNo,
        phoneNumber,
        orderDate,
        paymentMethod,
        orderItems,
        totalPrice: totalPrice.toFixed(2),
        discountRate,
        discountAmount,
        finalTotal,
        paidAmount,
        balance
    };
}

// -----------------------------------------------------------------------------------------------------------------------------

function placeTextInRow(rowChars, text, left, width, align) {
    let displayText = text;
    if (displayText.length > width) {
        displayText = displayText.substring(0, width);
    }
    
    let startPos = left;
    if (align === 'center') {
        startPos = left + Math.floor((width - displayText.length) / 2);
    } else if (align === 'right') {
        startPos = left + width - displayText.length;
    }
    
    for (let i = 0; i < displayText.length; i++) {
        if (startPos + i < rowChars.length) {
            rowChars[startPos + i] = displayText[i];
        }
    }
}

// -----------------------------------------------------------------------------------------------------------------------------

function generateSampleData(field, format, orderContext) {
    if (!field) return '';
    
    let formatType = '';
    if (format.includes(':')) {
        const formatParts = format.match(/{0:(.*?)}/);
        if (formatParts && formatParts[1]) {
            formatType = formatParts[1];
        }
    }
    
    const fieldLower = field.toLowerCase();
    
    switch (fieldLower) {
        case 'customername':
        case 'specificcustomername':
        case 'customerfullname':
            return orderContext.customerName;
            
        case 'customerphone':
        case 'orderphone':
        case 'phone':
        case 'phonenumber':
            return orderContext.phoneNumber;
        
        case 'addresstext':
        case 'customeraddress':
        case 'address':
        case 'deliveryaddress':
            return orderContext.address;
            
        case 'addressnotes':
        case 'addressdetails':
        case 'locationnotes':
            return orderContext.addressNote;
            
        case 'orderdate':
        case 'orderdatetime':
        case 'date':
        case 'datetime':
            return formatDate(orderContext.orderDate, formatType || 'dd.MM.yyyy HH:mm');
            
        case 'systemtime':
        case 'currenttime':
        case 'time':
            return formatDate(new Date(), 'HH:mm');
            
        case 'ordernotes':
        case 'notes':
        case 'ordermessage':
            return orderContext.orderNote;
            
        case 'orderexternalnotes':
        case 'externalnotes':
        case 'additionalinfo':
            return orderContext.externalNote;
            
        case 'orderid':
        case 'ordercode':
        case 'orderreference':
            return orderContext.orderID;
            
        case 'receiptno':
        case 'receiptnumber':
        case 'documentnumber':
            return orderContext.receiptNo;
            
        case 'bartabname':
        case 'bartab':
        case 'tabname':
            return 'VIP Müşteri';
            
        case 'ordertypename':
        case 'ordertype':
        case 'deliverytype':
            return getRandomItem(randomData.orderTypes);
            
        case 'employeename':
        case 'employee':
        case 'waiter':
        case 'cashier':
            return orderContext.employeeName;
            
        case 'dineintabletext':
        case 'tablenumber':
        case 'tablenumbertext':
        case 'tableid':
            return orderContext.tableID;
            
        case 'tablegrouptext':
        case 'tablegroup':
        case 'sectionname':
            return orderContext.tableGroup;
            
        case 'tablefeature':
        case 'tableproperties':
            return getRandomItem(randomData.tableFeatures);
            
        case 'guestnumber':
        case 'guests':
        case 'pax':
            return Math.floor(Math.random() * 6) + 1;
            
        case 'stationid':
        case 'terminal':
        case 'terminalid':
            return 'Kasa-' + (Math.floor(Math.random() * 5) + 1);
            
        case 'quantity':
        case 'amount':
        case 'itemcount':
            return Math.floor(Math.random() * 5) + 1;
            
        case 'menuitemtext':
        case 'producttext':
        case 'itemname':
        case 'displaytext':
            return getRandomItem(randomData.foodItems);
            
        case 'productcode':
        case 'itemcode':
        case 'sku':
            return getRandomItem(randomData.productCodes);
            
        case 'unitname':
        case 'unit':
            return getRandomItem(randomData.units);
            
        case 'categoryname':
        case 'category':
            return getRandomItem(randomData.categories);
            
        case 'featurestext':
        case 'itemfeatures':
        case 'properties':
            return getRandomItem(randomData.featureTexts);
            
        case 'extendedprice':
        case 'linetotal':
        case 'lineprice':
            return getRandomPrice(50, 200);
            
        case 'price':
        case 'unitprice':
        case 'itemprice':
            return getRandomPrice(20, 150);
            
        case 'totalprice':
        case 'grandtotal':
        case 'totalamount':
            return orderContext.totalPrice;
            
        case 'paidtotal':
        case 'paidamount':
        case 'amountpaid':
            return orderContext.paidAmount;
            
        case 'discounttotalamount':
        case 'discountamount':
        case 'discount':
            return orderContext.discountAmount;
            
        case 'paymentbalance':
        case 'balance':
        case 'remainingamount':
            return orderContext.balance;
            
        case 'paymentmethodname':
        case 'paymentmethod':
        case 'paymenttype':
            return orderContext.paymentMethod;
            
        case 'creditcardnumber':
        case 'cardnumber':
            return getRandomItem(randomData.creditCardNumbers);
            
        case 'taxrate':
        case 'vatrate':
            return formatType.startsWith('p') ? Math.floor(Math.random() * 10) + 8 : (Math.floor(Math.random() * 10) + 8) / 100;
            
        case 'taxamount':
        case 'vatamount':
            return getRandomPrice(5, 30);
            
        case 'couponcode':
        case 'discountcode':
            return getRandomItem(randomData.couponCodes);
            
        case 'companyname':
        case 'businessname':
        case 'company':
            return getRandomItem(randomData.companyNames);
            
        case 'branchname':
        case 'branch':
        case 'store':
            return getRandomItem(randomData.branches);
            
        case 'taxnumber':
        case 'taxid':
        case 'vkn':
            return getRandomItem(randomData.taxNumbers);
            
        case 'autoid':
            if (format === 'İSTANBUL RESTORAN' || format.includes('EG-Yazılım')) {
                return format;
            } else if (format.includes('------------------------')) {
                return format;
            } else if (format.includes('_______________________')) {
                return format;
            }
            return format.includes('{0}') ? orderContext.restaurantName : format;
            
        default:
            if (format.includes('{0}')) {
                if (formatType.startsWith('n')) {
                    return getRandomPrice();
                } else if (formatType.includes('dd') || formatType.includes('MM') || formatType.includes('yyyy')) {
                    return formatDate(orderContext.orderDate, formatType);
                } else if (formatType.includes('HH') || formatType.includes('mm')) {
                    return formatDate(new Date(), formatType);
                } else if (formatType.startsWith('c')) {
                    return getRandomPrice();
                } else if (formatType.startsWith('p')) {
                    return Math.random();
                }
                
                return fieldLower.charAt(0).toUpperCase() + fieldLower.slice(1);
            }
            
            return format;
    }
}

// -----------------------------------------------------------------------------------------------------------------------------

function printReceipt() {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Fiş Yazdır</title>
            <style>
                body {
                    font-family: 'Courier New', Courier, monospace;
                    font-size: 12px;
                    line-height: 1.2;
                    white-space: pre;
                    padding: 10px;
                }
            </style>
        </head>
        <body>
            ${receiptElement.innerHTML}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}

function scaleReceipt() {
    const scale = parseFloat(scaleSelect.value);
    receiptElement.style.transform = `scale(${scale})`;
}

function showError(message) {
    receiptElement.innerHTML = `<div class="error">${message}</div>`;
    xmlContentElement.textContent = '';
    
    printBtn.disabled = true;
    printBtn.classList.add('disabled');
}

// -----------------------------------------------------------------------------------------------------------------------------

fileInput.addEventListener('change', handleFileUpload);
printBtn.addEventListener('click', printReceipt);
scaleSelect.addEventListener('change', scaleReceipt);

window.addEventListener('DOMContentLoaded', () => {
    
    receiptElement.innerHTML = '<div class="empty-message">Lütfen bir .xml dosyası seçin</div>';
    xmlContentElement.textContent = '';
    
    printBtn.disabled = true;
    printBtn.classList.add('disabled');
});

// -----------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            button.classList.add('active');
            const tabId = button.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    initDesignTab();
    
    receiptElement.innerHTML = '<div class="empty-message">Lütfen bir .xml dosyası seçin</div>';
    xmlContentElement.textContent = '';
    
    printBtn.disabled = true;
    printBtn.classList.add('disabled');
});

// -----------------------------------------------------------------------------------------------------------------------------

function initDesignTab() {
    const generateBtn = document.getElementById('generate-receipt-btn');
    const downloadBtn = document.getElementById('download-xml-btn');
    const designReceiptElement = document.getElementById('design-receipt');
    const designXmlContentElement = document.getElementById('design-xml-content');
    
    const checkboxes = document.querySelectorAll('[data-feature]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const featureName = this.dataset.feature;
            const valueInputs = document.querySelectorAll(`[data-feature-value="${featureName}"]`);
            valueInputs.forEach(input => {
                input.disabled = !this.checked;
            });
        });
    
        const featureName = checkbox.dataset.feature;
        const valueInputs = document.querySelectorAll(`[data-feature-value="${featureName}"]`);
        valueInputs.forEach(input => {
            input.disabled = !checkbox.checked;
        });
    });
    
// -----------------------------------------------------------------------------------------------------------------------------

    generateBtn.addEventListener('click', generateCustomReceipt);
    
    downloadBtn.addEventListener('click', function() {
        const xmlContent = designXmlContentElement.textContent;
        if (!xmlContent) {
            alert('Önce bir fiş tasarımı oluşturun.');
            return;
        }
        
        downloadXML(xmlContent, 'fisTasarimi.xml');
    });
    
    designReceiptElement.innerHTML = '<div class="empty-message">Fiş tasarımı oluşturmak için sol taraftaki seçenekleri kullanın ve "Fiş Tasarımını Oluştur" butonuna tıklayın.</div>';
    designXmlContentElement.textContent = '';
}

function downloadXML(xmlContent, filename) {
    const blob = new Blob([xmlContent], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// -----------------------------------------------------------------------------------------------------------------------------

function generateCustomReceipt() {
    const designReceiptElement = document.querySelector('#design-preview .thermal-receipt');
    const designXmlContentElement = document.getElementById('design-xml-content');
    
    const xmlContent = generateCustomXML();
    
    designXmlContentElement.textContent = xmlContent;
    
    try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlContent, 'text/xml');
        
        const parseError = xmlDoc.querySelector('parsererror');
        if (parseError) {
            throw new Error('XML oluşturulurken bir hata oluştu.');
        }
        
        const prjReport = xmlDoc.querySelector('prjReport');
        const columnCount = parseInt(prjReport.getAttribute('columncount')) || 40;
        
        generateReceipt(xmlDoc, columnCount, designReceiptElement);
    } catch (error) {
        designReceiptElement.innerHTML = `<div class="error">${error.message}</div>`;
    }
}

function generateCustomXML() {
    const columnCount = 40;
    
    let xml = `<?xml version="1.0" ?>
<prjReport version="2" columncount="${columnCount}" pagerow="30">`;
    
    xml += generateHeaderPanel();
    
    xml += generateProductListPanel();
    
    xml += generateTotalsPanel();
    
    xml += generateFooterPanel();
    
    if (isFeatureEnabled('payment-method')) {
        xml += generatePaymentMethodPanel();
    }
    
    if (isFeatureEnabled('order-notes')) {
        xml += generateOrderNotesPanel();
    }
    
    xml += `
</prjReport>`;
    
    return xml;
}

function generateHeaderPanel() {
    let panel = `
	<panels table="header" type="header">`;
    
    let row = 0;
    
    if (isFeatureEnabled('restaurant-name')) {
        const restaurantName = getFeatureValue('restaurant-name');
        panel += `
		<bricks font="11" field="AutoID" format="${restaurantName}" left="0" width="40" row="${row}" shownull="false" multiline="false" align="center" />`;
        row++;
    }
    
    if (isFeatureEnabled('branch-name')) {
        const branchName = getFeatureValue('branch-name');
        panel += `
		<bricks font="10" field="AutoID" format="${branchName}" left="0" width="40" row="${row}" shownull="false" multiline="false" align="center" />`;
        row++;
    }
    
    if (isFeatureEnabled('tax-number')) {
        const taxNumber = getFeatureValue('tax-number');
        panel += `
		<bricks font="00" field="AutoID" format="${taxNumber}" left="0" width="40" row="${row}" shownull="false" multiline="false" align="center" />`;
        row++;
    }
    
    panel += `
		<bricks field="AutoID" format="----------------------------------------" left="0" width="40" row="${row}" shownull="false" multiline="false" align="left" />`;
    row++;
    
    if (isFeatureEnabled('customer-name')) {
        panel += `
		<bricks font="10" field="SpecificCustomerName" format="Müşteri: {0}" left="0" width="40" row="${row}" shownull="false" multiline="true" align="left" />`;
        row++;
    }
    
    if (isFeatureEnabled('customer-address')) {
        panel += `
		<bricks field="AddressText" format="{0}" left="0" width="40" row="${row}" shownull="false" multiline="true" align="left" />`;
        row++;
    }
    
    if (isFeatureEnabled('customer-phone')) {
        panel += `
		<bricks field="OrderPhone" format="Tel: {0}" left="0" width="40" row="${row}" shownull="false" multiline="false" align="left" />`;
        row++;
    }
    
    if (isFeatureEnabled('table-info')) {
        panel += `
		<bricks font="10" field="DineInTableText" format="MASA: {0}" left="0" width="25" row="${row}" shownull="false" multiline="false" align="left" />`;
        row++;
    }
    
    if (isFeatureEnabled('table-group')) {
        panel += `
		<bricks font="10" field="TableGroupText" format="GRUP: {0}" left="0" width="25" row="${row}" shownull="false" multiline="false" align="left" />`;
        row++;
    }
    
    if (isFeatureEnabled('order-datetime')) {
        panel += `
		<bricks field="OrderDateTime" format="{0:dd.MM.yyyy HH:mm}" left="0" width="25" row="${row}" shownull="false" multiline="false" align="left" />`;
        row++;
    }
    
    if (isFeatureEnabled('order-type')) {
        panel += `
		<bricks font="10" field="OrderTypeName" format="{0}" left="0" width="25" row="${row}" shownull="false" multiline="false" align="left" />`;
        row++;
    }
    
    panel += `
		<bricks field="AutoID" format="----------------------------------------" left="0" width="40" row="${row}" shownull="false" multiline="false" align="left" />`;
    row++;
    
    if (isFeatureEnabled('employee-name')) {
        panel += `
		<bricks field="EmployeeName" format="PERSONEL: {0}" left="0" width="25" row="${row}" shownull="false" multiline="false" align="left" />`;
        row++;
    }
    
    if (isFeatureEnabled('terminal-id')) {
        panel += `
		<bricks field="StationID" format="TERMİNAL: {0}" left="0" width="15" row="${row}" shownull="false" multiline="false" align="right" />`;
        row++;
    }
    
    panel += `
		<bricks field="AutoID" format="_________________________________________" left="0" width="40" row="${row}" shownull="false" multiline="false" align="none" />`;
    
    panel += `
	</panels>`;
    
    return panel;
}

function generateProductListPanel() {
    if (!isFeatureEnabled('product-list')) {
        return '';
    }
    
    const productColumnsType = getFeatureValue('product-columns') || 'quantity-product-price';
    
    let panel = `
	<panels table="detail">`;

    if (productColumnsType === 'quantity-product-price') {
        panel += `
		<bricks field="Quantity" format="{0}" left="0" width="5" row="0" shownull="false" multiline="false" align="center" />
		<bricks field="MenuItemText" format="{0}" left="5" width="25" row="0" shownull="false" multiline="true" align="left" />
		<bricks field="ExtendedPrice" format="{0:n2}" left="30" width="10" row="0" shownull="false" multiline="true" align="right" />`;
    }
    else if (productColumnsType === 'quantity-product') {
        panel += `
		<bricks field="Quantity" format="{0}" left="0" width="5" row="0" shownull="false" multiline="false" align="center" />
		<bricks field="MenuItemText" format="{0}" left="5" width="35" row="0" shownull="false" multiline="true" align="left" />`;
    }
    else if (productColumnsType === 'product-price') {
        panel += `
		<bricks field="MenuItemText" format="{0}" left="0" width="30" row="0" shownull="false" multiline="true" align="left" />
		<bricks field="ExtendedPrice" format="{0:n2}" left="30" width="10" row="0" shownull="false" multiline="true" align="right" />`;
    }
    
    panel += `
	</panels>`;
    
    return panel;
}

function generateTotalsPanel() {
    let panel = `
	<panels table="header" type="header">
		<bricks field="AutoID" format="----------------------------------------" left="0" width="40" row="0" shownull="false" multiline="false" align="left" />`;
    
    let row = 1;

    if (isFeatureEnabled('total-price')) {
        panel += `
		<bricks font="10" field="TotalPrice" format="TOPLAM: {0:n2} TL" left="0" width="40" row="${row}" shownull="false" multiline="false" align="right" />`;
        row++;
    }
    
    if (isFeatureEnabled('discount')) {
        panel += `
		<bricks field="DiscountTotalAmount" format="İNDİRİM: -{0:n2} TL" left="0" width="40" row="${row}" shownull="false" multiline="false" align="right" />`;
        row++;
    }
    
    if (isFeatureEnabled('paid-amount')) {
        panel += `
		<bricks font="10" field="PaidTotal" format="ÖDENEN: {0:n2} TL" left="0" width="40" row="${row}" shownull="false" multiline="false" align="right" />`;
        row++;
    }
    
    if (isFeatureEnabled('payment-balance')) {
        panel += `
		<bricks font="11" field="PaymentBalance" format="KALAN: {0:n2} TL" left="0" width="40" row="${row}" shownull="false" multiline="false" align="right" />`;
        row++;
    }
    
    if (isFeatureEnabled('waiter-tip')) {
        const tipPercentage = getFeatureValue('waiter-tip-percentage') || '10';
        panel += `
		<bricks field="AutoID" format="----------------------------------------" left="0" width="40" row="${row}" shownull="false" multiline="false" align="left" />`;
        row++;
        
        panel += `
		<bricks font="10" field="TotalPrice" format="GARSONİYE (%${tipPercentage}): {0:n2} TL" left="0" width="40" row="${row}" shownull="false" multiline="false" align="right" />`;
        row++;
    }
    
    panel += `
		<bricks field="AutoID" format="" left="0" width="40" row="${row}" shownull="false" multiline="false" align="center" />`;
    row++;
    
    if (isFeatureEnabled('thank-you')) {
        const thankYouText = getFeatureValue('thank-you');
        panel += `
		<bricks font="10" field="AutoID" format="${thankYouText}" left="0" width="40" row="${row}" shownull="false" multiline="false" align="center" />`;
        row++;
    }

    if (isFeatureEnabled('not-fiscal')) {
        const notFiscalText = getFeatureValue('not-fiscal');
        panel += `
		<bricks font="00" field="AutoID" format="${notFiscalText}" left="0" width="40" row="${row}" shownull="false" multiline="false" align="center" />`;
        row++;
    }
    
    panel += `
	</panels>`;
    
    return panel;
}

function generateFooterPanel() {
    let panel = `
	<panels table="header" type="header">`;
    
    let row = 0;

    if (isFeatureEnabled('order-id')) {
        panel += `
		<bricks field="OrderID" format="SİPARİŞ NO: {0}" left="0" width="20" row="${row}" shownull="false" multiline="false" align="left" />
		<bricks field="ReceiptNo" format="FİŞ NO: {0}" left="20" width="20" row="${row}" shownull="false" multiline="false" align="right" />`;
        row++;
    }
    
    if (isFeatureEnabled('sys-info')) {
        const sysInfoText = getFeatureValue('sys-info');
        panel += `
		<bricks prefix="--20" suffix="20--" field="AutoID" format="${sysInfoText}" left="0" width="40" row="${row}" shownull="false" multiline="false" align="center" />`;
    }
    
    panel += `
	</panels>`;
    
    return panel;
}

function generatePaymentMethodPanel() {
    return `
	<panels table="Payment" type="header">
		<bricks field="PaymentMethodName" format="{0}" left="0" width="20" row="0" shownull="false" multiline="false" align="left" />
		<bricks field="AmountPaid" format="{0:n2}" left="20" width="20" row="0" shownull="false" multiline="false" align="right"/>
	</panels>`;
}

function generateOrderNotesPanel() {
    return `
	<panels table="header" type="header">
		<bricks field="OrderNotes" format="{0}" left="0" width="40" row="0" shownull="false" multiline="True" align="left" />
		<bricks field="OrderExternalNotes" format="{0}" left="0" width="40" row="1" shownull="false" multiline="True" align="left"/>
	</panels>`;
}

// -----------------------------------------------------------------------------------------------------------------------------

function isFeatureEnabled(featureName) {
    const checkbox = document.querySelector(`[data-feature="${featureName}"]`);
    return checkbox && checkbox.checked;
}

function getFeatureValue(featureName) {
    const valueInput = document.querySelector(`[data-feature-value="${featureName}"]`);
    return valueInput ? valueInput.value : '';
}

// -----------------------------------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const formElements = document.querySelectorAll('#design-tab input, #design-tab select');
    
    formElements.forEach(element => {
        ['input', 'change'].forEach(eventType => {
            element.addEventListener(eventType, () => {
                if (element.type === 'checkbox') {
                    const featureName = element.dataset.feature;
                    const relatedInputs = document.querySelectorAll(`[data-feature-value="${featureName}"]`);
                    relatedInputs.forEach(input => {
                        input.disabled = !element.checked;
                    });
                }
                
                updateLivePreview();
            });
        });
        
        if (element.type === 'checkbox') {
            const featureName = element.dataset.feature;
            const relatedInputs = document.querySelectorAll(`[data-feature-value="${featureName}"]`);
            relatedInputs.forEach(input => {
                input.disabled = !element.checked;
            });
        }
    });
    
    updateLivePreview();
});

function updateLivePreview() {
    const receipt = document.querySelector('#design-preview .thermal-receipt');
    if (!receipt) return;

    const getFeatureValue = (featureName) => {
        const element = document.querySelector(`[data-feature-value="${featureName}"]`);
        const checkbox = document.querySelector(`[data-feature="${featureName}"]`);
        if (checkbox && !checkbox.checked) return '';
        return element ? element.value : '';
    };

    const companyName = getFeatureValue('restaurant-name');
    const companyAddress = getFeatureValue('branch-name');
    const taxInfo = getFeatureValue('tax-number');
    
    const orderDate = getFeatureValue('order-date');
    const orderTime = getFeatureValue('order-time');
    const orderNumber = getFeatureValue('order-id');
    
    const customerName = getFeatureValue('customer-name');
    const customerAddress = getFeatureValue('customer-address');
    const customerPhone = getFeatureValue('customer-phone');

    let html = '<div class="receipt-content">';

    if (companyName) html += `<div class="header"><h2>${companyName}</h2></div>`;
    if (companyAddress) html += `<div class="address"><p>${companyAddress}</p></div>`;
    if (taxInfo) html += `<div class="tax-info"><p>${taxInfo}</p></div>`;

    html += '<div class="separator">----------------------------------------</div>';
    
    if (orderDate || orderTime) {
        html += `<div class="order-info">`;
        if (orderDate) html += `<p>Tarih: ${orderDate}</p>`;
        if (orderTime) html += `<p>Saat: ${orderTime}</p>`;
        html += '</div>';
    }
    
    if (orderNumber) html += `<div class="order-number"><p>Sipariş No: ${orderNumber}</p></div>`;
    
    if (customerName || customerAddress || customerPhone) {
        html += '<div class="customer-info">';
        if (customerName) html += `<p>Müşteri: ${customerName}</p>`;
        if (customerAddress) html += `<p>Adres: ${customerAddress}</p>`;
        if (customerPhone) html += `<p>Tel: ${customerPhone}</p>`;
        html += '</div>';
    }

    let hasTableInfo = false;
    if (isFeatureEnabled('table-info') || isFeatureEnabled('table-group') || 
        isFeatureEnabled('employee-name') || isFeatureEnabled('terminal-id')) {
        
        html += '<div class="table-staff-info">';
        
        if (isFeatureEnabled('table-info')) {
            const tableNumber = getRandomItem(randomData.tables);
            html += `<p>MASA: ${tableNumber}</p>`;
            hasTableInfo = true;
        }
        
        if (isFeatureEnabled('table-group')) {
            const tableGroup = getRandomItem(randomData.tableGroups);
            html += `<p>GRUP: ${tableGroup}</p>`;
            hasTableInfo = true;
        }
        
        if (isFeatureEnabled('employee-name')) {
            const employeeName = getRandomItem(randomData.employeeNames);
            html += `<p>PERSONEL: ${employeeName}</p>`;
            hasTableInfo = true;
        }
        
        if (isFeatureEnabled('terminal-id')) {
            const terminalId = 'Terminal-' + (Math.floor(Math.random() * 5) + 1);
            html += `<p>TERMINAL: ${terminalId}</p>`;
            hasTableInfo = true;
        }
        
        html += '</div>';
        
        if (hasTableInfo) {
            html += '<div class="separator">----------------------------------------</div>';
        }
    }

    if (isFeatureEnabled('product-list')) {
        html += '<div class="products">';
        
        const columnType = getFeatureValue('product-columns');
        html += '<div class="product-header">';
        if (columnType === 'quantity-product-price' || columnType === 'quantity-product') {
            html += '<span style="width: 4ch">Adet</span>';
        }
        html += '<span style="flex: 1">Ürün</span>';
        if (columnType === 'quantity-product-price' || columnType === 'product-price') {
            html += '<span style="width: 10ch">Fiyat</span>';
        }
        html += '</div>';

        const itemCount = Math.floor(Math.random() * 3) + 3;
        let totalAmount = 0;

        for (let i = 0; i < itemCount; i++) {
            const quantity = Math.floor(Math.random() * 3) + 1;
            const product = getRandomItem(randomData.foodItems);
            const price = parseFloat(getRandomPrice(30, 150));
            const total = quantity * price;
            totalAmount += total;

            html += '<div class="product-row">';
            if (columnType === 'quantity-product-price' || columnType === 'quantity-product') {
                html += `<span style="width: 4ch">${quantity}</span>`;
            }
            html += `<span style="flex: 1">${product}</span>`;
            if (columnType === 'quantity-product-price' || columnType === 'product-price') {
                html += `<span style="width: 10ch">${total.toFixed(2)}</span>`;
            }
            html += '</div>';
        }

        html += '</div>';
        html += '<div class="separator">----------------------------------------</div>';

        html += '<div class="totals">';

        if (isFeatureEnabled('total-price')) {
            html += `<p style="text-align: right">TOPLAM: ${totalAmount.toFixed(2)} TL</p>`;
        }

        if (isFeatureEnabled('discount')) {
            const discountRate = Math.floor(Math.random() * 20) + 5;
            const discountAmount = (totalAmount * discountRate / 100);
            totalAmount -= discountAmount;
            html += `<p style="text-align: right">İNDİRİM (%${discountRate}): -${discountAmount.toFixed(2)} TL</p>`;
        }

        if (isFeatureEnabled('waiter-tip')) {
            const tipRate = parseInt(getFeatureValue('waiter-tip-percentage')) || 10;
            const tipAmount = (totalAmount * tipRate / 100);
            html += `<p style="text-align: right">GARSONİYE (%${tipRate}): ${tipAmount.toFixed(2)} TL</p>`;
            totalAmount += tipAmount;
        }

        if (isFeatureEnabled('paid-amount')) {
            const paidAmount = Math.min(totalAmount, totalAmount * (Math.random() * 0.5 + 0.5));
            html += `<p style="text-align: right">ÖDENEN: ${paidAmount.toFixed(2)} TL</p>`;

            if (isFeatureEnabled('payment-balance')) {
                const remainingAmount = totalAmount - paidAmount;
                html += `<p style="text-align: right">KALAN: ${remainingAmount.toFixed(2)} TL</p>`;
            }
        }

        if (isFeatureEnabled('payment-method')) {
            html += `<p style="text-align: right">ÖDEME: ${getRandomItem(randomData.paymentMethods)}</p>`;
        }

        html += '</div>';
    }

    if (isFeatureEnabled('thank-you')) {
        const thankYouText = getFeatureValue('thank-you');
        html += '<div class="separator">----------------------------------------</div>';
        html += `<div class="footer"><p style="text-align: center">${thankYouText}</p></div>`;
    }

    if (isFeatureEnabled('not-fiscal')) {
        const notFiscalText = getFeatureValue('not-fiscal');
        html += `<div class="footer"><p style="text-align: center">${notFiscalText}</p></div>`;
    }

    html += '</div>';
    
    receipt.innerHTML = html;
}