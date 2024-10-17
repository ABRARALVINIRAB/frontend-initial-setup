import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Paper, Modal, TextField, Button
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

// Modal styles
const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for the modal
    overflow: 'scroll', // Handle overflow
};

const modalContentStyle = {
    backgroundColor: 'white', // White background for the modal content
    padding: '20px',
    borderRadius: '5px',
    width: '400px', // Set a fixed width for the modal
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
};

const PaginationTable = ({ data, columns }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    const handleOpenView = (item) => {
        setCurrentItem(item);
        setViewModalOpen(true);
    };

    const handleOpenEdit = (item) => {
        setCurrentItem(item);
        setEditModalOpen(true);
    };

    const handleOpenDelete = (item) => {
        setCurrentItem(item);
        setDeleteModalOpen(true);
    };

    const handleCloseModal = () => {
        setViewModalOpen(false);
        setEditModalOpen(false);
        setDeleteModalOpen(false);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleDelete = () => {
        // Add your delete logic here
        console.log(`Deleted item with id: ${currentItem._id}`);
        handleCloseModal(); // Close the delete modal after action
    };

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell key={column.field}>{column.headerName}</StyledTableCell>
                            ))}
                            <StyledTableCell>Actions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                            <StyledTableRow key={item._id}>
                                {columns.map((column) => (
                                    <StyledTableCell key={column.field} component="th" scope="row">
                                        {item[column.field]}
                                    </StyledTableCell>
                                ))}
                                <StyledTableCell>
                                    <Button onClick={() => handleOpenView(item)}>View</Button>
                                    <Button onClick={() => handleOpenEdit(item)}>Edit</Button>
                                    <Button color="error" onClick={() => handleOpenDelete(item)}>Delete</Button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            {/* View Modal */}
            <Modal open={viewModalOpen} onClose={handleCloseModal}>
                <div style={modalStyle}>
                    <div style={modalContentStyle}>
                        {currentItem && (
                            <>
                                <h2 style={{ color: 'black' }}>View Item</h2>
                                {columns.map((column) => (
                                    <p key={column.field} style={{ color: 'black' }}>
                                        {column.headerName}: {currentItem[column.field]}
                                    </p>
                                ))}
                            </>
                        )}
                        <Button onClick={handleCloseModal}>Close</Button>
                    </div>
                </div>
            </Modal>

            {/* Edit Modal */}
            <Modal open={editModalOpen} onClose={handleCloseModal}>
                <div style={modalStyle}>
                    <div style={modalContentStyle}>
                        {currentItem && (
                            <>
                                <h2 style={{ color: 'black' }}>Edit Item</h2>
                                {columns.map((column) => (
                                    <TextField
                                        key={column.field}
                                        label={column.headerName}
                                        defaultValue={currentItem[column.field]}
                                        fullWidth
                                        margin="normal"
                                    />
                                ))}
                            </>
                        )}
                        <Button onClick={handleCloseModal}>Save</Button>
                        <Button onClick={handleCloseModal}>Cancel</Button>
                    </div>
                </div>
            </Modal>

            {/* Delete Modal */}
            <Modal open={deleteModalOpen} onClose={handleCloseModal}>
                <div style={modalStyle}>
                    <div style={modalContentStyle}>
                        <h2 style={{ color: 'black' }}>Delete Item</h2>
                        {currentItem && (
                            <p style={{ color: 'black' }}>
                                Are you sure you want to delete this item?
                            </p>
                        )}
                        <Button color="error" onClick={handleDelete}>Delete</Button>
                        <Button onClick={handleCloseModal}>Cancel</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default PaginationTable;
