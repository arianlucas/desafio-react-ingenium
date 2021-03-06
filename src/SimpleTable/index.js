import "./index.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NavLink } from "react-router-dom";

export function Table() {
  const rows = [
    {
      id: 1,
      caso: 200121312352134,
      contato: { nome: "Pablo", sobrenome: "Henrique" },
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: { nome: "Nenhum", sobrenome: "agente" },
      prioridade: "./imgs/bandeira-azul.png",
    },
    {
      id: 2,
      caso: 200121312352134,
      contato: { nome: "Pablo", sobrenome: "Henrique" },
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: { nome: "Lucas", sobrenome: "Silva" },
      prioridade: "./imgs/bandeira-verde.png",
    },
    {
      id: 3,
      caso: 200121312352134,
      contato: { nome: "Pablo", sobrenome: "Henrique" },
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: { nome: "Lucas", sobrenome: "Silva" },
      prioridade: "./imgs/bandeira-azul.png",
    },
    {
      id: 4,
      caso: 200121312352134,
      contato: { nome: "Pablo", sobrenome: "Henrique" },
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: { nome: "Lucas", sobrenome: "Silva" },
      prioridade: "./imgs/bandeira-verde.png",
    },
    {
      id: 5,
      caso: 200121312352134,
      contato: { nome: "Pablo", sobrenome: "Henrique" },
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: { nome: "Lucas", sobrenome: "Silva" },
      prioridade: "./imgs/bandeira-azul.png",
    },
    {
      id: 6,
      caso: 200121312352134,
      contato: { nome: "Pablo", sobrenome: "Henrique" },
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: { nome: "Lucas", sobrenome: "Silva" },
      prioridade: "./imgs/bandeira-verde.png",
    },
    {
      id: 7,
      caso: 200121312352134,
      contato: { nome: "Pablo", sobrenome: "Henrique" },
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: { nome: "Lucas", sobrenome: "Silva" },
      prioridade: "./imgs/bandeira-azul.png",
    },
    {
      id: 8,
      caso: 200121312352134,
      contato: { nome: "Pablo", sobrenome: "Henrique" },
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: { nome: "Lucas", sobrenome: "Silva" },
      prioridade: "./imgs/bandeira-verde.png",
    },
    {
      id: 9,
      caso: 200121312352134,
      contato: { nome: "Pablo", sobrenome: "Henrique" },
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: { nome: "Lucas", sobrenome: "Silva" },
      prioridade: "./imgs/bandeira-azul.png",
    },
    {
      id: 10,
      caso: 200121312352134,
      contato: { nome: "Pablo", sobrenome: "Henrique" },
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: { nome: "Lucas", sobrenome: "Silva" },
      prioridade: "./imgs/bandeira-verde.png",
    },
  ];

  return (
    <>
      <div className="head-table">
        <div className="container-head">
          <div className="first-column">
            <p className="titles-head">Caso</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Contato</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Status</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Empresa</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Assunto</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Solicita????o</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Prazo</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Tarefas</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Agente</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Prioridade</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="last-column">
            <p className="titles-head">A????o</p>
          </div>
        </div>
      </div>
      <div className="body-table">
        {rows.map((row) => (
          <div className="row-body" key={row.id}>
            <div className="first-column-body">
              <NavLink to={"/details"}>{row.caso}</NavLink>
            </div>
            <div className="column-body contact">
              <p>{row.contato.nome}</p>
              <p>{row.contato.sobrenome}</p>
            </div>
            <div className="column-body">
              <p>{row.status}</p>
            </div>
            <div className="column-body">
              <p>{row.empresa}</p>
            </div>
            <div className="column-body">
              <p>{row.assunto}</p>
            </div>
            <div className="column-body">
              <p>{row.solicitacao}</p>
            </div>
            <div className="column-body">
              <p>{row.prazo}</p>
            </div>
            <div className="column-body">
              <p>{row.tarefas}</p>
            </div>
            <div className="column-body agente">
              <p className={row.agente.nome === "Nenhum" && "red-agente"}>
                {row.agente.nome}
              </p>
              <p className={row.agente.nome === "Nenhum" && "red-agente"}>
                {row.agente.sobrenome}
              </p>
            </div>
            <div className="column-body">
              <img src={row.prioridade} alt="" />
            </div>
            <div className="column-body action">
              <MoreVertIcon />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
