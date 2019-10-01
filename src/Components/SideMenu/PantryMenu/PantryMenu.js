//Modules
import React, { useState } from "react";
import styled from "styled-components";
//Styles
import { grays, flex, spacing, font } from "../../../Utilities";
import { StyledButton } from "../../../Elements";
//Redux
import { connect } from "react-redux";
import { addPantryItem } from "../../../Store/Actions/pantryActions";

const PantryMenu = ({ uid, addPantryItem }) => {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState(0);
  const [inStock, setInStock] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (name && unit) {
      const payload = {
        id: uid,
        name,
        unit,
        price,
        inStock
      };

      addPantryItem(payload);

      //Clear inputs
      setName("");
      setUnit("");
      setPrice(0);
      setInStock(false);
      setErrorMessage("");
    } else {
      setErrorMessage("Please fill all fields");
    }
  };

  return (
    <StyledContainer>
      <h2>Add Pantry Item:</h2>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="unit">Unit</label>
          <input
            type="text"
            id="unit"
            value={unit}
            onChange={e => {
              setUnit(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={e => {
              setPrice(e.target.value);
            }}
          />
        </div>

        <div className="checkbox-input-group">
          <label htmlFor="inStock">In Stock</label>
          <input
            type="checkbox"
            id="inStock"
            value={inStock}
            onChange={e => {
              setInStock(!inStock);
            }}
          />
        </div>

        <StyledButton>Add</StyledButton>

        <p className="error-message">{errorMessage}</p>
      </StyledForm>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  padding: ${spacing.S};
  border-bottom: 2px solid ${grays[2]};

  h2 {
    ${font("S")};
    font-weight: 300;
    margin-bottom: ${spacing.S};
  }

  .error-message {
    ${font("XS")};
    margin-top: ${spacing.S};
    color: maroon;
  }
`;

const StyledForm = styled.form`
  width: 100%;

  div {
    width: 100%;
    margin-bottom: ${spacing.S};

    label {
      ${font("XS")};
      display: block;
      font-weight: 300;
    }

    input[type="text"],
    input[type="number"] {
      ${font("XS")};
      width: 100%;
    }
  }

  .checkbox-input-group {
    ${flex("row", "flex-start", "center")};

    input {
      margin-left: ${spacing.S};
    }
  }
`;

const mapStateToProps = state => {
  return {
    uid: state.firebase.auth.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPantryItem: payload => {
      dispatch(addPantryItem(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PantryMenu);
