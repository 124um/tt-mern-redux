const { getBooksData, getCoversData, getBookData, postBookData, postCoverData, patchBookData, patchCoverData, deleteBookData, deleteCoverData } = require( "../utils/BooksUtils")

exports.getBooks = async (req, res) => {
    try {
        const results = await getBooksData();
        res.send({
            "code": 200, "success": "success getBooksData", results
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
    try {
        const results = await getBookData(req.body.id);
        res.send({
            "code": 200, "success": "success  getBookData", results
        });
    } catch (error) {
        console.log("error ocurred", error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
    }
};

exports.postBook = async (req, res) => {
    try {
        const results = await postBookData(req.body);
        res.send({
            "code": 200, "success": "success postBookData", results
        });
    } catch (error) {
        console.log("error ocurred", error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
    }
};

exports.patchBook = async (req, res) => {
    try {
        const results = await patchBookData(req.body);
        res.send({
            "code": 200, "success": "success pathBookData", results
        });
    } catch (error) {
        console.log("error ocurred", error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
    }
};

exports.deleteBook = async (req, res) => {
    try {
        
        console.log("exports.deleteBook ~ req-----------------", req.body)
        const results = await deleteBookData(req.body);
        res.send({
            "code": 200, "success": "success  deleteBookData", results
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
            "code": 200, "success": "success  getCoversData", results
        });
    } catch (error) {
        console.log("error ocurred", error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
    }
};

exports.getCover = async (req, res) => {
    try {
        const results = await getCoverData(res.body.id);
        res.send({
            "code": 200, "success": "success getCoverData", results
        });
    } catch (error) {
        console.log("error ocurred", error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
    }
};

exports.postCover = async (req, res) => {
    try {
        const results = await postCoverData(res.body);
        res.send({
            "code": 200, "success": "success postCoverData", results
        });
    } catch (error) {
        console.log("error ocurred", error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
    }
};

exports.patchCover = async (req, res) => {
    try {
        const results = await patchCoverData(res.body);
        res.send({
            "code": 200, "success": "success pathCoverData", results
        });
    } catch (error) {
        console.log("error ocurred", error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
    }
};

exports.deleteCovers = async (req, res) => {
    try {
        const results = await deleteCoverData(res.body.id);
        res.send({
            "code": 200, "success": "success deleteCoverData", results
        });
    } catch (error) {
        console.log("error ocurred", error);
        res.send({
            "code": 400,
            "failed": "error ocurred"
        })
    }
};