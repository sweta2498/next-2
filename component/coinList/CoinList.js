import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  CircularProgress,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Pagination,
  TextField,
} from "@mui/material";
const CoinList = ({ coins }) => {
  const [coinList, setCoinList] = useState(coins);

  const [page, setPage] = useState(1);

  const handleChange = (e) => {
    setPage(1);
    setCoinList(
      coins?.filter((coin) =>
        coin?.name?.toLowerCase()?.includes(e.target.value.toLowerCase())
      )
    );
  };
  return (
    <Container sx={{ marginTop: "50px" }}>
      <TextField
        size="small"
        onChange={handleChange}
        placeholder="Search coin..."
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell>Price</TableCell>
              {/* <TableCell>1h</TableCell> */}
              <TableCell>24h</TableCell>
              {/* <TableCell>7d</TableCell> */}
              <TableCell>24h Volume</TableCell>
              <TableCell>Mkt Cap</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {coinList && coinList?.length > 0 ? (
              coinList
                ?.slice((page - 1) * 10, (page - 1) * 10 + 10)
                ?.map((i, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Typography
                        component="div"
                        display="flex"
                        alignItems="center"
                      >
                        <Image
                          src={i?.image}
                          alt={i?.image}
                          height="20"
                          width="20"
                        />

                        <Typography
                          ml={1}
                          variant="body2"
                          fontWeight="700"
                          fontFamily="system-ui"
                          sx={{
                            "& a": { textDecoration: "none", color: "gray" },
                          }}
                        >
                          <Link href={`coin/${i?.id}`}>{i?.name}</Link>
                        </Typography>
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        ${i?.current_price?.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body2"
                        color={
                          i?.price_change_percentage_24h < 0
                            ? "#e15241"
                            : "#4eaf0a"
                        }
                      >
                        {i?.price_change_percentage_24h?.toFixed(2)}%
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        ${i?.total_volume?.toLocaleString()}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2">
                        ${i?.market_cap?.toLocaleString()}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <Typography textAlign="center">No record found</Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        page={page}
        count={parseInt((coinList?.length / 10)?.toFixed(0))}
        onChange={(e, value) => {
          setPage(value);
          window.scroll(0, 450);
        }}
        sx={{ marginTop: "16px" }}
      />
    </Container>
  );
};

export default CoinList;
