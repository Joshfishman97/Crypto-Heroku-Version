import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function DetailsCoinPage() {
	const params = useParams();
	return <div>{params.coin}</div>;
}
