import { Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CartIcon () {
  return (
    <div>
      <Badge color="secondary" badgeContent={0}>
        <ShoppingCartIcon />{" "}
      </Badge>
    </div>
  )
}