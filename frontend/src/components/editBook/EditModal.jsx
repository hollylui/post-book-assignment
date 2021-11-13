import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import VariableContext from "../../context/VariableContext";
import {
  handleClose,
  editTitleHandler,
  editBookHandler,
  editContentHandler,
} from "./EditBookHelper";

const EditModal = () => {
  const {
    show,
    setShow,
    setEditTitle,
    setEditContent,
    editId,
    editTitle,
    editContent,
    setBookList,
  } = useContext(VariableContext);

  return (
    <Modal show={show} onHide={() => handleClose(setShow)} size="sm">
      <Modal.Header closeButton>
        <Modal.Title>No. {editId}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label className="m-1">Title:</label>
        <br />
        <input
          type="text"
          onChange={(e) => editTitleHandler(e, setEditTitle)}
        />
        <br />
        <label className="m-1">Content:</label>
        <br />
        <textarea
          name="content"
          id=""
          cols="19"
          rows="4"
          onChange={(e) => editContentHandler(e, setEditContent)}
        ></textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() =>
            editBookHandler(
              setShow,
              editId,
              editTitle,
              editContent,
              setBookList
            )
          }
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
