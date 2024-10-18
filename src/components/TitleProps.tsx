"use client";

import React from "react";
import styles from "./Title.module.css";

interface TitleProps {
  text: string;
  level: 1 | 2 | 3; // Define os níveis de título
}

const Title: React.FC<TitleProps> = ({ text, level }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={styles[`title${level}`]}>{text}</Tag>;
};

export default Title;
