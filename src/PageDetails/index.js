import "./index.css";
import "../global.css";
import Button from "@mui/material/Button";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Input from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Fab from "@mui/material/Fab";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CallIcon from "@mui/icons-material/Call";

export function Details() {
  return (
    <div className="Details">
      <header>
        <img src="./imgs/icon_menu.svg" alt="" />
        <img src="./imgs/logo-ingcorp.png" alt="" />
        <div className="user-box">
          <img src="./imgs/user_icon-listas.svg" alt="" />
          <p>Lucas Romero Cardim</p>
        </div>
        <p className="title-group">Grupo: Prospecção</p>
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
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <ArrowForwardIosIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Pausas"
        />
        <div className="final-icons">
          <img src="./imgs/settings-icon-listas.svg" alt="" />
          <img src="./imgs/notifications-icon-listas.svg" alt="" />
          <img src="./imgs/logout-icon-listas.svg" alt="" />
        </div>
      </header>
      <div className="main-content">
        <div className="side-menu">
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
        <div className="main-page">bbbbb</div>
      </div>
    </div>
  );
}
