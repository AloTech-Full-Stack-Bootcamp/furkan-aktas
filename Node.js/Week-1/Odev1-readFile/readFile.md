
## 1. Devam eden `readFile` işlemi varken programın çalışmasını nasıl durdurabilirim?

Devam eden bir işlemi iptal etmek için `AbortSignal` kullanılabilmektedir.


``` JavaScript
import {readFile} from 'fs';

const controller = new AbortController();
const signal = controller.signal;

readFile(fileInfo[0].name, { signal }, (err, buffer) => {
    // ...
});

// when you wanna abort the request
controller.abort();
```

## 2. `readFile` fonksiyonu dosyayı bütün halinde okuyup memory’ye alır. Programın daha az memory kullanmasını sağlamak için alternatif olarak neler kullanılabilir?

 Bu problemi çözebilmek için alternatif olarak kullanılabilecek 2 yöntem vardır;  
 `createReadStream` ve
 `fs.read` yöntemleri `readFile` metoduna oranla daha az memory kullanımına sebep olur fakat bu durumun dezavantajı ise bu metodların kullanımının diğerine oranla biraz daha karmaşık yapıda olmasıdır.

