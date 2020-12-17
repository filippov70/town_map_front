// school и kindergarten содержат id из data.js (в объекте geojsonFeature)

var address = [
    //Образец {value:"", data: {school: "1", kindergarten: ""}},
    //Школа № 5
    {value:"Кольцово 1", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 2", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 3", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 4", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 5", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 6", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 6а", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 6б", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 7", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 7а", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 8", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 9", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 10", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 11", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 12", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 13", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 14", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 15", data: {school: "1", kindergarten: "4"}},
    {value:"Кольцово 16", data: {school: "1", kindergarten: "4"}},
    {value:"Зеленая", data: {school: "1", kindergarten: "4"}},
    {value:"Лесная", data: {school: "1", kindergarten: "4"}},
    {value:"Луговая", data: {school: "1", kindergarten: "4"}},
    {value:"Овражная", data: {school: "1", kindergarten: "4"}},
    {value:"Полевая", data: {school: "1", kindergarten: "4"}},
    {value:"Садовая", data: {school: "1", kindergarten: "4"}},
    {value:"Строительная", data: {school: "1", kindergarten: "4"}},
    {value:"Технопарковая", data: {school: ["1", "3"], kindergarten: "7"}},
    {value:"Цветочная", data: {school: "1", kindergarten: "7"}},
    {value:"Центральная7", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная9", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная11", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная11а", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная13", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная14", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная16", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная20", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная22", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная24", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная24а", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная24б", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная26", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная28", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная30", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная32", data: {school: "1", kindergarten: "4"}},
    {value:"Центральная34", data: {school: "1", kindergarten: "4"}},
    {value:"ДНП Квартал-12", data: {school: "1", kindergarten: "6"}},
    {value:"ТСН Молодой специалист", data: {school: "1", kindergarten: ["4", "6"]}}, // для примера
    {value:"ДНТ Кольцово Парк 2", data: {school: "1", kindergarten: ["6" , "8"]}},
    {value:"Общежитие ГППЗ", data: {school: "1", kindergarten: "4"}},
    {value:"СНТ Ветеран", data: {school: "1", kindergarten: "5"}},
    {value:"СНТ Колос", data: {school: "1", kindergarten: "5"}},
    {value:"СНТ Поле", data: {school: "1", kindergarten: "5"}},
    {value:"СНТ Клён", data: {school: "1", kindergarten: "5"}},
    //Школа № 21
    {value:"Кольцово 17", data: {school: "2", kindergarten: "5"}},
    {value:"Кольцово 18", data: {school: "2", kindergarten: "5"}},
    {value:"Кольцово 19", data: {school: "2", kindergarten: "6"}},
    {value:"Кольцово 22", data: {school: "2", kindergarten: "6"}},
    {value:"Кольцово 23", data: {school: "2", kindergarten: "6"}},
    {value:"Кольцово 24", data: {school: "2", kindergarten: "5"}},
    {value:"Кольцово 25", data: {school: "2", kindergarten: "6"}},
    {value:"Кольцово 26", data: {school: "2", kindergarten: "5"}},
    {value:"Кольцово 27", data: {school: "2", kindergarten: "5"}},
    {value:"Кольцово 28", data: {school: "2", kindergarten: "6"}},
    {value:"Кольцово 29", data: {school: "2", kindergarten: "5"}},
    {value:"Кольцово 30", data: {school: "2", kindergarten: "5"}},
    {value:"Кольцово 31", data: {school: "2", kindergarten: "5"}},
    {value:"Кольцово 32", data: {school: "2", kindergarten: "5"}},
    {value:"Кольцово 34", data: {school: "2", kindergarten: "6"}},
    {value:"Кольцово 35", data: {school: "2", kindergarten: "6"}},
    {value:"Кольцово 36", data: {school: "2", kindergarten: "6"}},
    {value:"Кольцово 37", data: {school: "2", kindergarten: "6"}},
    {value:"Кольцово 45", data: {school: "2", kindergarten: "5"}},
    {value:"Кольцово 46", data: {school: "2", kindergarten: "5"}},
    {value:"Кольцово 47", data: {school: "2", kindergarten: "5"}},
    {value:"Векторная", data: {school: "2", kindergarten: "5"}},
    {value:"Весенняя", data: {school: "2", kindergarten: "5"}},
    {value:"Восходная", data: {school: "2", kindergarten: "5"}},
    {value:"Звездная", data: {school: "2", kindergarten: "5"}},
    {value:"Кленовая", data: {school: "2", kindergarten: "5"}},
    {value:"Новая", data: {school: "2", kindergarten: "5"}},
    {value:"Песчаная", data: {school: "2", kindergarten: ""}},
    {value:"Солнечная", data: {school: "2", kindergarten: "5"}},
    {value:"Центральная 2", data: {school: "2", kindergarten: "6"}},
    {value:"Центральная 3", data: {school: "2", kindergarten: "6"}},
    {value:"Центральная 4", data: {school: "2", kindergarten: "6"}},
    {value:"Центральная 5", data: {school: "2", kindergarten: "6"}},
    {value:"Центральная 6", data: {school: "2", kindergarten: "6"}},
    {value:"Центральная 8", data: {school: "2", kindergarten: "6"}},
    {value:"Центральная 10", data: {school: "2", kindergarten: "6"}},
    {value:"Центральная 12", data: {school: "2", kindergarten: "6"}},
    {value:"АБК № 1", data: {school: "2", kindergarten: "5"}},
    {value:"АБК № 2", data: {school: "2", kindergarten: "5"}},
    {value:"АБК № 3/1", data: {school: "2", kindergarten: ""}},

    // Школа № 3
    {value:"Березовая", data: {school: "3", kindergarten: "7"}},
    {value:"Благовещенская,", data: {school: "3", kindergarten: ""}},
    {value:"Вишнёвая", data: {school: "3", kindergarten: "7"}},
    {value:"Вознесенская", data: {school: "3", kindergarten: "7"}},
    {value:"Дубравная", data: {school: "3", kindergarten: "7"}},
    {value:"Журавлиная", data: {school: "3", kindergarten: "8"}},
    {value:"Кедровая", data: {school: "3", kindergarten: "7"}},
    {value:"Кольцевая", data: {school: "3", kindergarten: "8"}},
    {value:"Краснокалинная", data: {school: "3", kindergarten: "8"}},
    {value:"Малая Совиная", data: {school: "3", kindergarten: "8"}},
    {value:"Молодежная ", data: {school: "3", kindergarten: "7"}},
    {value:"Нагорная", data: {school: "3", kindergarten: "8"}},
    {value:"Никольский проспект", data: {school: "3", kindergarten: "8"}},
    {value:"Олимпийская", data: {school: "3", kindergarten: "7"}},
    {value:"Орлиная", data: {school: "3", kindergarten: "8"}},
    {value:"Парковая", data: {school: "3", kindergarten: "8"}},
    {value:"Преображенская", data: {school: "3", kindergarten: ""}},
    {value:"Радужная", data: {school: "3", kindergarten: "7"}},
    {value:"Рассветная", data: {school: "3", kindergarten: "8"}},
    {value:"Розовая", data: {school: "3", kindergarten: "7"}},
    {value:"Рябиновая", data: {school: "2", kindergarten: "7"}},
    {value:"Сиреневая", data: {school: "2", kindergarten: "7"}},
    {value:"Солнечная Поляна", data: {school: "2", kindergarten: "8"}},
    {value:"Соловьиная", data: {school: "2", kindergarten: "8"}},
    {value:"Технопарковая", data: {school: "2", kindergarten: "7"}},
    {value:"Цветочная", data: {school: "2", kindergarten: "7"}},
    {value:"Южная", data: {school: "2", kindergarten: "8"}},
    {value:"Янтарная", data: {school: "2", kindergarten: "8"}},
    {value:"Микрорайон Спектр", data: {school: "2", kindergarten: "8"}},
];