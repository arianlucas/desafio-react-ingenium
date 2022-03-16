import "./index.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const rows = [
  {
    id: 1,
    caso: 200121312352134,
    contato: "Pablo Henrique",
    status: "Cancelado",
    empresa: "IngDesk",
    assunto: "Parcelamento",
    solicitacao: "Parcelamento",
    prazo: "01/12/2021",
    tarefas: "02 tarefas",
    agente: "Nenhum agente",
    prioridade: "./imgs/bandeira-azul.png",
  },
  {
    id: 2,
    caso: 200121312352134,
    contato: "Pablo Henrique",
    status: "Cancelado",
    empresa: "IngDesk",
    assunto: "Parcelamento",
    solicitacao: "Parcelamento",
    prazo: "01/12/2021",
    tarefas: "02 tarefas",
    agente: "Lucas Silva",
    prioridade: "./imgs/bandeira-verde.png",
  },
  {
    id: 3,
    caso: 200121312352134,
    contato: "Pablo Henrique",
    status: "Cancelado",
    empresa: "IngDesk",
    assunto: "Parcelamento",
    solicitacao: "Parcelamento",
    prazo: "01/12/2021",
    tarefas: "02 tarefas",
    agente: "Lucas Silva",
    prioridade: "./imgs/bandeira-azul.png",
  },
  {
    id: 4,
    caso: 200121312352134,
    contato: "Pablo Henrique",
    status: "Cancelado",
    empresa: "IngDesk",
    assunto: "Parcelamento",
    solicitacao: "Parcelamento",
    prazo: "01/12/2021",
    tarefas: "02 tarefas",
    agente: "Lucas Silva",
    prioridade: "./imgs/bandeira-verde.png",
  },
  {
    id: 5,
    caso: 200121312352134,
    contato: "Pablo Henrique",
    status: "Cancelado",
    empresa: "IngDesk",
    assunto: "Parcelamento",
    solicitacao: "Parcelamento",
    prazo: "01/12/2021",
    tarefas: "02 tarefas",
    agente: "Lucas Silva",
    prioridade: "./imgs/bandeira-azul.png",
  },
  {
    id: 6,
    caso: 200121312352134,
    contato: "Pablo Henrique",
    status: "Cancelado",
    empresa: "IngDesk",
    assunto: "Parcelamento",
    solicitacao: "Parcelamento",
    prazo: "01/12/2021",
    tarefas: "02 tarefas",
    agente: "Lucas Silva",
    prioridade: "./imgs/bandeira-verde.png",
  },
  {
    id: 7,
    caso: 200121312352134,
    contato: "Pablo Henrique",
    status: "Cancelado",
    empresa: "IngDesk",
    assunto: "Parcelamento",
    solicitacao: "Parcelamento",
    prazo: "01/12/2021",
    tarefas: "02 tarefas",
    agente: "Lucas Silva",
    prioridade: "./imgs/bandeira-azul.png",
  },
  {
    id: 8,
    caso: 200121312352134,
    contato: "Pablo Henrique",
    status: "Cancelado",
    empresa: "IngDesk",
    assunto: "Parcelamento",
    solicitacao: "Parcelamento",
    prazo: "01/12/2021",
    tarefas: "02 tarefas",
    agente: "Lucas Silva",
    prioridade: "./imgs/bandeira-verde.png",
  },
  {
    id: 9,
    caso: 200121312352134,
    contato: "Pablo Henrique",
    status: "Cancelado",
    empresa: "IngDesk",
    assunto: "Parcelamento",
    solicitacao: "Parcelamento",
    prazo: "01/12/2021",
    tarefas: "02 tarefas",
    agente: "Lucas Silva",
    prioridade: "./imgs/bandeira-azul.png",
  },
  {
    id: 10,
    caso: 200121312352134,
    contato: "Pablo Henrique",
    status: "Cancelado",
    empresa: "IngDesk",
    assunto: "Parcelamento",
    solicitacao: "Parcelamento",
    prazo: "01/12/2021",
    tarefas: "02 tarefas",
    agente: "Lucas Silva",
    prioridade: "./imgs/bandeira-verde.png",
  },
];

export function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: "100%" }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ display: "flex", justifyContent: "space-between" }}>
            <TableCell>
              <p className="div-head">Caso</p>
              <img src="./imgs/filter-table-icon-listas.svg" alt="" />
            </TableCell>
            <TableCell align="right">
              <p className="div-head case2">Contato</p>{" "}
              <img src="./imgs/filter-table-icon-listas.svg" alt="" />
            </TableCell>
            <TableCell align="right">
              <p className="div-head case2">Status</p>
              <img src="./imgs/filter-table-icon-listas.svg" alt="" />
            </TableCell>
            <TableCell align="right">
              <p className="div-head case2">Empresa</p>
              <img src="./imgs/filter-table-icon-listas.svg" alt="" />
            </TableCell>
            <TableCell align="right">
              <p className="div-head case2">Assunto</p>
              <img src="./imgs/filter-table-icon-listas.svg" alt="" />
            </TableCell>
            <TableCell align="right">
              <p className="div-head case2">Solicitação</p>

              <img src="./imgs/filter-table-icon-listas.svg" alt="" />
            </TableCell>
            <TableCell align="right">
              <p className="div-head case2">Prazo</p>
              <img src="./imgs/filter-table-icon-listas.svg" alt="" />
            </TableCell>
            <TableCell align="right">
              <p className="div-head case2">Tarefas</p>
              <img src="./imgs/filter-table-icon-listas.svg" alt="" />
            </TableCell>
            <TableCell align="right">
              <p className="div-head case2">Agente</p>
              <img src="./imgs/filter-table-icon-listas.svg" alt="" />
            </TableCell>
            <TableCell align="right">
              <p className="div-head case2">Prioridade</p>
              <img src="./imgs/filter-table-icon-listas.svg" alt="" />
            </TableCell>
            <TableCell align="right" className="small-table">
              <p className="div-head case2">Ação</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                display: "flex",
              }}
            >
              <TableCell component="th" scope="row">
                <p className="div-body">{row.caso}</p>
              </TableCell>
              <TableCell align="right">
                <p className="div-body">{row.contato}</p>
              </TableCell>
              <TableCell align="right">
                <p className="div-body">{row.status}</p>
              </TableCell>
              <TableCell align="right">
                <p className="div-body">{row.empresa}</p>
              </TableCell>
              <TableCell align="right">
                <p className="div-body">{row.assunto}</p>
              </TableCell>
              <TableCell align="right">
                <p className="div-body">{row.solicitacao}</p>
              </TableCell>
              <TableCell align="right">
                <p className="div-body">{row.prazo}</p>
              </TableCell>
              <TableCell align="right">
                <p className="div-body">{row.tarefas}</p>
              </TableCell>
              <TableCell align="right">
                <p className="div-body">{row.agente}</p>
              </TableCell>
              <TableCell align="right">
                <img src={row.prioridade} alt="" />
              </TableCell>
              <TableCell align="right">
                <MoreVertIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
