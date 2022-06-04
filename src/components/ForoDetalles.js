import React, { Component } from 'react'
import { useParams } from "react-router-dom";

export default function ForoDetalles(props) {
    let { id } = useParams();

    return (
      <div>{id}</div>
    )
}