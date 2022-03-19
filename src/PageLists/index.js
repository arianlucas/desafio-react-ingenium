import "./index.css";
import "./header-list.css";
import "../global.css";
import { Table } from "../SimpleTable";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "@mui/material/Button";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Input from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fab from "@mui/material/Fab";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CallIcon from "@mui/icons-material/Call";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import EventIcon from "@mui/icons-material/Event";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export function Lists() {
  let navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(true);

  return (
    <div className="Lists">
      <header>
        <div className="ingweb-menu">
          <img
            src="./imgs/icon_menu_header.svg"
            alt="ícone menu"
            className="icon_menu"
            onClick={() => setOpenMenu(!openMenu)}
          />
          <img
            src="./imgs/logo-ingcorp.png"
            alt="Logo ingcorp"
            className="logo_ingcorp"
          />
          <div className="user-box">
            <img src="./imgs/user_icon-listas.svg" alt="icone do usuario" />
            <p className="poppins">Lucas Romero Cardim</p>
          </div>
        </div>

        <p className="title-group roboto">Grupo: Prospecção</p>
        <div className="button-input_header">
          <Button
            variant="contained"
            color="success"
            startIcon={<PhoneInTalkIcon />}
          >
            <div className="infos-button">
              <p>Livre</p>
              <span>00:00:00</span>
            </div>
          </Button>
          <Input
            className="roboto"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ArrowForwardIosIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Pausas"
          />
        </div>
        <div className="final-icons">
          <img
            src="./imgs/settings-icon-listas.svg"
            className="settings-icon"
            alt="Icone das configurações"
          />
          <img
            src="./imgs/notifications-icon-listas.svg"
            className="notifications-icon"
            alt="Icone das notificações"
          />
          <img
            src="./imgs/logout-icon-listas.svg"
            className="logout-icon"
            onClick={() => navigate("/")}
            alt="Icone de logout"
          />
        </div>
      </header>
      <div className="main-content">
        <div className={openMenu ? "side-menu" : "no-side-menu"}>
          <div className="container-icons">
            <div className="icon-div">
              <img src="./imgs/speed-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/clientes-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/atendentes-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/equipes-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/call-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/monitorias-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/relatorios-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/tarefas-icon-listas.svg" alt="" />
            </div>
            <div className="icon-div">
              <img src="./imgs/case-icon-listas.svg" alt="" />
            </div>
          </div>
          <div className="buttons-icons">
            <Fab size="small" sx={{ backgroundColor: "white" }}>
              <AddOutlinedIcon fontSize="large" />
            </Fab>
            <Fab color="primary" size="small">
              <CallIcon fontSize="large" />
            </Fab>
          </div>
        </div>
        <div className="main-page">
          <div className="main-container">
            <div className="search-bar">
              <h1 className="poppins">Casos</h1>
              <Input
                className="search-input poppins"
                placeholder="Buscar por número do Caso"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon fontSize="large" />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                startIcon={<FilterListIcon color="primary" />}
                className="filter-button poppins"
              >
                Filtrar
              </Button>
              <div className="date-container">
                <Button
                  endIcon={<EventIcon sx={{ color: "#C2CFE0" }} />}
                  className="date-button"
                >
                  12 de Dezembro, 2021
                </Button>
                <p className="poppins">até</p>
                <Button
                  endIcon={<EventIcon sx={{ color: "#C2CFE0" }} />}
                  className="date-button"
                >
                  12 de Dezembro, 2021
                </Button>
              </div>
              <Button
                variant="contained"
                className="add-cases"
                startIcon={<AddCircleOutlineIcon color="inherit" />}
              >
                Caso
              </Button>
            </div>
            <div className="filter-bar">
              <p className="poppins">Selecione por Status:</p>
              <Button
                className="filter-buttons white-buttons"
                variant="contained"
              >
                Em tratamento
              </Button>
              <Button className="filter-buttons" variant="contained">
                Pendente
              </Button>
              <Button
                className="filter-buttons white-buttons"
                variant="contained"
              >
                Concluídos
              </Button>
              <Button className="filter-buttons" variant="contained">
                Cancelados
              </Button>
            </div>
            <img
              src="./imgs/user_icon-listas.svg"
              alt="icone do usuario"
              className="icone-main"
            />
            <div className="table-list">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
