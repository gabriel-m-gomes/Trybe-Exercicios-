let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  


  function customerInfo(order) {
    let ana = order.order.delivery.deliveryPerson
    let nome = order.name
    let phone = order.phoneNumber
    let adressP = order.address.street
    let num = order.address.number
    let app = order.address.apartment
   //console.log('Olá', ana, 'entregara para:', nome, 'Telefone:', phone, 'R.', adressP +',', 'N°:', num +',', 'AP:', app)
  }
  
  customerInfo(order);
  
  function orderModifier(order) {
     let nome = order.name = 'Luiz Silva'
     let preço = 0
     let chave = Object.keys(order.order.pizza)
     let pizza;
     let pizzaDois;
     for (let key in chave) {
       if (chave[key] === 'marguerita') {
           pizza = chave[key]
 
       }
       if (chave[key] === 'pepperoni') {
           pizzaDois = chave[key]
          
       }
     }
     let price1 = order.order.pizza.marguerita.price
      let price2 = order.order.pizza.pepperoni.price
      let price3 = order.order.drinks.coke.price
      let coca = order.order.drinks.coke.type
      let total = price1 + price2 + price3
        if (total >= 50) {
              total = 50
        }


      console.log(`Olá ${nome}, o valor total de seu pedido de ${pizza}, ${pizzaDois} e ${coca} é R$ ${total}`)
  }
  
  orderModifier(order);