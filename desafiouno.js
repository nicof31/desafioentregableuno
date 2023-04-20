class ProductManager{
    constructor(){
        this.products = [];
        this.idGenerador = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock){
        //valido que todos campos sean obligatorios cuando se cargan
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Error: Todos los campos son obligatorios");
          };

            //verifico que el campo CODE no se repita
        const codeVerificar = this.products.find(
            (product) =>
             product.code === code);
        
        if (codeVerificar != null) {
        console.error("Error: Este producto ya existe, cargue un nuevo codigo");
        } else {
            

               
        const product = {
            "id": this.idGenerador,
            "title": title,
            "description": description,
            "price": price,
            "thumbnail": thumbnail,
            "code": code,
            "stock": stock
        };

      

        this.products.push(product);
        this.idGenerador++;

        }
    }

    getProducts(){
        return this.products;
    }

    getProductById(idParam){
       const resultadoBusqueda = this.products.find(({ id }) => id === idParam); 
        if(!resultadoBusqueda)
         {
           return "Error: Not found";
           
          }
         // console.log("Producto:", resultadoBusqueda);
          return resultadoBusqueda;
        }
    }


//INSTANCIAR OBJETO LISTA DE PRODUCTOS
const productList = new ProductManager();
console.log(productList.getProducts());

//AGREGAR PRODUCTO

//matriz de carga: addProduct(title, description, price, thumbnail, code, stock)
productList.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25);
console.log(productList.getProducts());
productList.addProduct("producto prueba","Este es un producto prueba",200,"Sin imagen","abc123",25);


productList.addProduct("Arroz","Yamaní",500,"https:/link.com.ar","001",500);
productList.addProduct("Fideo","Tirabuzón",750,"https:/link.com.ar","001",325);
productList.addProduct("Alfajor","Sin Culpa",300,"https:/link.com.ar","003",1000);

console.log(productList.getProducts());

//agregar id para iniciar la busqueda

console.log("\n\t\tEl producto por ID es:\n------------------------------------------------------------- ");
console.log(productList.getProductById(1));
console.log("------------------------------------------------------------- ");

//agregar id para iniciar la busqueda de un producto no creado

console.log("\n\t\tEl producto por ID es:\n------------------------------------------------------------- ");
console.log(productList.getProductById(10));
console.log("------------------------------------------------------------- ");

//validacion de campos obligatorios del objetocreado
productList.addProduct("Este es un producto prueba",200,"Sin imagen","abc523",25);
productList.addProduct("producto prueba","Este es un producto prueba","Sin imagen","abc193",75);