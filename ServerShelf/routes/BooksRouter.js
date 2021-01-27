const { getBooksData, getCoversData, getBookData } = require( "../utils/BooksUtils")

exports.getBooks = async (req, res) => {
    try {
        const results = await getBooksData();
        res.send({
            "code": 200, "success": "success get data", results
        });
    } catch (error) {
        console.log("error ocurred", error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
    }
};

exports.getBook = async (req, res) => {
    console.log("exports.getBbook= ~ req", req.body)

    
    try {
        const results = await getBookData(req.body.id);
        res.send({
            "code": 200, "success": "success get data", results
        });
    } catch (error) {
        console.log("error ocurred", error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
    }
};

exports.getCovers = async (req, res) => {
    try {
        const results = await getCoversData();
        res.send({
            "code": 200, "success": "success get data", results
        });
    } catch (error) {
        console.log("error ocurred", error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
    }
};