# Solana Coding Camp AMM

- refactor structure

## Backend

- AMM program x.y=k
- typescript lib & test
- npm publish

## Notes

- mỗi pool cung cấp 1 seed
- các pool nên có tresurer khác nhau
- x_treasury, y_treasury: luu x, y token
- để dùng init_if_needed: bật flag trong cargo.toml của anchor-lang

- chuyển tiền trước khi ghi data: transfer -> ghi pool

### Swap logic

- dst_y_account: account trả token swap cho người dùng, sử dụng init_if_needed: khởi tạo nếu cần
- transfer lượng a từ ví người dùng vào treasury
- chuyển ngược lại token swap vào ví người dùng (dst_y_account) với lượng b. authority phải ký giao dịch nên tái tạo seed và sign bằng seed và bump -> call CpiContext:new_with_seed
- update lại pool
- tránh overflow - dùng lib num-trails khai báo trong cargo.toml
- dùng hàm checked_add().ok_or(err), checked_sub().ok_or(err)

- sử dụng event tăng ux lên
- khai báo struct event #[event]
- post event:

```Rust
emit(CreatePoolEvent { data })
```

- tinh toan sử dụng u128 tránh overflow -> cast về lại u64 -> return
- thực hiện nhân trước chia sau

### Testing

- pre-test

### Front-end

- use IDL
