# Nashwa-Kamal
------------------

# Automation Project

* Language  : Javascript 

* Framework : Test Cafe for assertions 

* API : Axios

-----------------------

* Before run the project :

   1) Download Node.js 
   2) inside Project Terminal run below :

          sudo npm install 
          sudo  npm start
          npm install testcafe
          npm install axios
          
                                  

--------------------------------                    
   
* To Run Product API Test :

      npm run test:API

-----------------------------               

* To Update Test data for APIs  :

      Update json file  ../APITest/test-helpers/test-data/price-engine-data.json
      Update json file  ../APITest/test-helpers/test-data/product-data.json
    

------------------------------------------------
For the project I used axios to implement the API tests and used testcafe for assertions and validate the responses , 
The files structure as below :

      1)	Models/ Pages folder that contains Page for each Api function separately
                a)	Create product API
                b)	Update Product API
                c)	Delete Product API
                d)	Get all products API and Get Product By ID API in the same file  
                e)	Price Engine API
                
      2)	Test helpers/testdata contains json file with bodies needed to the API requests
                a)	Price-list-engine json 
                b)	Product-data.json

      3)	Tests folder that contains all tests files 
                a)	CreateProduct .test.js Contains below test cases :
                    •	Create product 
                    •	Create multiple products from array in json file ( using data driven )
                b)	GetProducts.test.js Contains below test cases:
                    •	Get all products 
                    •	Get product by id
                    •	Get product by non exist ID ( unhappy scenario )
                c)	UpdateProduct.test.js Contains below testcases:
                    •	Update product by id
                d)	GetProductPrice.test.js Contains below testcases:
                    •	Get product price
                e)	DeleteProduct.test.js Contains below testcases:
                    •	Delete product by id
                    •	Delete non exist product by id ( unhappy scenario )
                    •	Delete multiple products ( from array in json file ( using data driven )

