const { Column, Board } = require("../../models")
const { HttpError } = require('../../helpers')

const deleteColumn = async (req, res) => {
    const { id } = req.params;
    const result = await Column.findByIdAndRemove(id);
    if (!result) {
        throw HttpError(404, `Column ${id} not found`);
    }
    await Board.findByIdAndUpdate(result.board, {
        $pull: { columnOrder: result._id },
    });
    res.status(200).json({
        message: `Column ${id} deleted successfully`,
        data: result
    });
};

module.exports = deleteColumn;