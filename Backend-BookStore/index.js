const express = require("express")
const app = express() 
const port = 3000 ; 
const cors = require("cors")

// Middle ware
app.use(express.json());
app.use(cors());

// MongoDB configuration
const { MongoClient, ServerApiVersion , ObjectId } = require('mongodb');
const uri = "mongodb+srv://book-store-demo:75aI8k93pKXJZwUZ@cluster0.gvpitsl.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect(); 
    
    
    
    // Create a collections of documents
    const bookCollections = await client.db("BookInventory").collection("books")

    // Insert a book to the place 
    app.post("/upload-book", async (req, res ) => {
        const data = req.body ; 
        const result = await bookCollections.insertOne(data) ; 
        res.send(result.status);
    })

    app.get("/book/:id", async (req, res) => {
        const id = req.params.id ;
        const filter  = {_id : new ObjectId(id)} ; 
        const result = await bookCollections.findOne(filter) ; 
        res.send(result)
    })

    app.patch("/books/:id" , async (req,res) => {
        const id = req.params.id ; 
        const updatedBookData = req.body ; 
        const filter = {_id: new ObjectId(id)} ; 
        const options = {upsert : true} ; 
        const updateDoc = {
            $set: {
                ...updatedBookData
            }
        }

        //Update 
        const result = await bookCollections.updateOne(filter, updateDoc , options) ; 
        res.send(result) ; 
    })

    app.delete("/delete-book/:id", async(req, res) => {
        const id = req.params.id ; 
        const filter = {_id: new ObjectId(id)} ; 
        const result = await bookCollections.deleteOne(filter) ; 
        if (result.deletedCount === 1 ) {
            console.log("Delete Successfull") ; 
        }
        else {
            console.log("No book have deleted ") ; 
        }
    })

    app.get("/get-books", async(req, res) => {
        const data = await bookCollections.find() ; 
        const result = await data.toArray() ;
        res.send(result) ;  

    })


    app.get("/all-books", async(req, res ) => {
        let query = {} 
        if (req.query?.category) {
            query = {category : req.query.category} 
        }
        const result = await bookCollections.find(query).toArray() ; 
        res.send(result) ;  
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req,res) => {
    res.send("Hello world")
})

app.listen( port, () => {
    console.log(`Your server is running on port ${port}`)
})